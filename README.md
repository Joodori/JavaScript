## 저장소 복제(클론) 및 최신 코드 받기

1. 저장소를 처음 받을 때:

    ```bash
    git clone https://github.com/Joodori/JavaScript.git
    ```

## 예시)
---
LX@PC35 MINGW64 ~/Desktop/java
$ git clone https://github.com/Joodori/JavaScript.git
Cloning into 'JavaScript'...
remote: Enumerating objects: 50, done.
remote: Counting objects: 100% (50/50), done.
remote: Compressing objects: 100% (42/42), done.
remote: Total 50 (delta 15), reused 32 (delta 5), pack-reused 0 (from 0)
Receiving objects: 100% (50/50), 28.25 KiB | 5.65 MiB/s, done.
Resolving deltas: 100% (15/15), done.
---


2. 이미 저장소가 있다면, 최신 코드로 갱신하려면 터미널에서 해당 폴더로 이동한 뒤:

    ```bash
    git pull origin master
    ```
## 예시)
---
LX@PC35 MINGW64 ~/Desktop/java
$ git pull origin master
fatal: not a git repository (or any of the parent directories): .git
---

3. 다시 파일에 들어가면 이 Repository에서 작업한 내용들이 Pull되어있음 자유롭게 사용하면 됩니다!
