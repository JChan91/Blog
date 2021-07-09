---
emoji: 🤓
title: Local Repo - Github Repo 등록하는 방법
date: '2021-07-07 20:30:00'
author: JChan
tags: git
categories: ETC
---

## Git 사용법

Repository를 매일 생성하지 않으니 잊어버려서 글을 쓰게 되었다 😂

> CRA를 통해 만든 리액트 앱을 깃허브에 등록하는 방법

먼저 깃허브에 Repository를 만든다
![image](https://user-images.githubusercontent.com/49114768/125086516-af2dcd80-e106-11eb-90d2-9d1d9d5334df.png)

리액트 앱 폴더에 들어가서 `git init`을 통해 git 저장소를 만든다

방금 만든 Repository의 URL을 복사한 뒤, `git remote add origin YOUR_URL`을 통해 원격 저장소을 등록한다

`git push origin master`을 통해 깃허브에 저장한다

끝 😀
