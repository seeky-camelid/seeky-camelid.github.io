---
title: "Unity3D Collaboration Using Git"
tags: ["tutorial", "Unity3D"]
---
Collaborating in Unity3D has always been a headache for me, mainly because of the extra difficulty that comes with **version control**. 

I have used Unity's default VC: Plastic. But I still find it more comfortable to use what I'm already familiar with: Git.

However, Git with Unity3D comes with its own set of challenges. This blog lists some of the my tips.

## Use the Right Git Ignore File
[gitignore for unity](https://github.com/github/gitignore/blob/main/Unity.gitignore)

## Manage Merge Conflicts
Generally speaking, merge conflicts tend to happen when multiple people try to edit the same file.

Changing the same C# script files is usually not an issue, since git can perform auto-merge pretty well. In the worst case scenarios, resolving code conflicts is not too bad since it's at least readable.

However, simultaneously changing anything else in the Unity project is problematic, especially the **scene files (.unity, .prefab, etc.)** since the unity YAML file format is rather cryptic (having a better understand of the [Unity Text Scene Format](https://docs.unity3d.com/Manual/TextSceneFormat.html) can help)

Therefore, the main idea throughout this section is: **avoid changing the same scene files at the same time**.

But there are times when we have to change the same scene file, which is why **it's very important to set up the Smart Merge Tool first**

### Strongly Recommended: Set up Smart Merge Tool for Git
#### Step 1: Set up UnityYAMLMerge for git

Unity is shipped with the **UnityYAMLMerge** tool, which has a semantic understanding of the scene files (.unity, .prefab), and can perform automatic smart merge most of the time.

The setup guide can be found here: https://docs.unity3d.com/Manual/SmartMerge.html

> **_NOTE:_**
> The guide only lists where to find UnityYAMLMerge binary on Windows and MacOS. 
> 
> For Linux users, you can first find the path to one installed editor  by going to the UnityHub → Installs
> 
> Then the path to the binary is usually: <PathToEditor>/Editor/Data/Tools/UnityYAMLMerge
> 

> **_NOTE:_**
> The guide above instructs to add this line to the .git/config:
> 
> ```bash
>   cmd = '<path to UnityYAMLMerge>' merge -p "$BASE" "$REMOTE" "$LOCAL" "$MERGED"
> ```
> 
> However, it should really be:
>
> ```bash
>   cmd = '<path to UnityYAMLMerge>' merge -p "$BASE" "$LOCAL" "$REMOTE" "$MERGED"
> ```
> My experiences so far with the tool leads me to believe that there's a typo in UnityYAMLMerge's help message: local should be passed to "left" file and remote be passed to "right". 
>

#### Step 2: Set up fallback merge tool for UnityYAMLMerge

In case UnityYAMLMerge fails to perform auto-merge (this is less likely to happen with the tool's smart merge), some manual resolution is needed.

Many tools can be used to resolve it. Here's an example with the open source, cross-platform tool: [meld](https://meldmerge.org/).

You need to edit the file *<PathToEditor>/Editor/Data/Tools/mergespecfile.txt*

```bash
...
 
unity use "<PathToMeld, e.g. /usr/bin/meld>" "%l" "%b" "%r" --output "%d"
prefab use "<PathToMeld>" "%l" "%b" "%r" --output "%d"
 
...
```
This places the left/local version in the left pane, the common base (of local and remote) version in the middle, the right/remote version version in the right pane, and it writes the result to the local merged version. 

For details see both UnityYAMLMerge --help and meld --help

### Merge Conflicts Resolution Flow
Assuming we're using a merge flow instead of a rebase flow:

1. Create a merge request to merge your branch into main branch on github/gitlab

2. Merge conflicts encountered!!

3. If conflicts involve scene files (.unity, .prefab), **must choose to resolve locally**:

```bash
# Get latest main
git checkout main
git pull
 
# Try to merge main into task_branch (!!Important, not the other way round!!)
git checkout task_branch
git merge main
```
4. UnityYAMLMerge does its thing

At this stage, the UnityYAMLMerge should be able to automatically resolve conflicts. If so, go directly to stage 6

5. Perform manual resolution

If UnityYAMLMerge fails, manually resolve the conflicts

6. Commit merge resolution and push to remote
```bash
# While on task_branch
git merge --continue
git push origin task_branch
```
7. Continue with the merge request (now conflict free)


### Other tips
#### Tip 1: Structure the project so that it can be easily split up into independent parts

##### Tip 1.1: Use prefab as much as possible
The idea is to try prefab everything in the scene. Then if someone needs to change a part of the scene, they only need to change the prefab file.

##### Tip 1.2: Try additive scene loading
[Additive scene loading](https://docs.unity3d.com/ScriptReference/SceneManagement.LoadSceneMode.Additive.html) allows us to split a scene into multiple ones, e.g. one for UI, one for level 1, one for level 2 etc. Then at run time, load them additively into a single final scene.

#### Tip 2: Structure the tasks so that they can be worked on independently
Try to structure the tasks so that each task has minimal co-dependency with other tasks. 

#### Tip 3: Communicate when critical shared files (e.g. main scene) need to be changed extensively
Communication is the key. Inform others before you need to make big changes to the project that touch multiple shared (critical) files. 