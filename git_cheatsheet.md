# Git Expert Cheatsheet (핵심 명령어 모음)

이 문서는 Git의 기본 워크플로우부터 원격 저장소 강제 동기화까지, 실무에서 가장 빈번하게 사용되는 핵심 명령어들을 정리한 가이드입니다.

---

## 1. 🚨 원격 저장소 강제 동기화 (PC A 시나리오)

**로컬 변경 사항을 무시하고 GitHub(Remote) 상태로 덮어씌울 때 사용합니다.**
_(주의: 로컬에서 작업 중이던 저장하지 않은 내용은 모두 삭제됩니다.)_

````bash
# 1. 원격 저장소의 최신 이력을 가져옴 (파일 변경 X)
git fetch --all

# 2. 로컬을 원격 저장소(origin)의 main 브랜치와 동일하게 강제 초기화
git reset --hard origin/main

> **💡 암기법 (Factory Reset):** > **"내 껀 다 필요 없고(Hard), 원본(Origin)으로 리셋(Reset) 해줘!"**

---

## 2. ⚙️ 초기 설정 및 조회 (Configuration)

Git 설정 상태와 원격 저장소 연결 정보를 확인합니다.

```bash
# 현재 Git 설정 전체 목록 확인 (user.name, user.email 등)
git config list

# 현재 연결된 원격 저장소 주소(URL) 확인
git remote -v

# 원격 저장소 연결 추가 (origin이라는 이름으로 URL 등록)
git remote add origin <repository_url>

````

---

## 3. 🚀 프로젝트 시작 (Setup)

새로운 프로젝트를 시작하거나 기존 프로젝트를 가져옵니다.

```bash
# 현재 폴더를 Git 저장소로 초기화 (.git 폴더 생성)
git init

# 원격 저장소(GitHub)의 내용을 로컬로 복제(다운로드)
git clone <repository_url>

```

---

## 4. 🌿 브랜치 관리 (Branching)

기능 개발을 위해 작업을 분리하고 관리합니다.

```bash
# 로컬 브랜치 목록 확인
git branch

# 새로운 브랜치 생성
git branch <new_branch_name>

# 브랜치 삭제 (병합된 브랜치만 삭제 가능)
git branch -d <branch_name>

# 특정 브랜치로 이동 (Switch)
git checkout <branch_name>

# 브랜치 생성과 동시에 이동 (자주 사용)
git checkout -b <branch_name>

```

---

## 5. 💾 변경 사항 저장 (Staging & Committing)

작업한 내용을 버전 관리 시스템에 기록합니다.

```bash
# 현재 상태 확인 (수정된 파일, 스테이징된 파일 확인)
git status

# 특정 파일을 스테이징 영역(Staging Area)에 추가
git add <file_name>

# 변경된 '모든' 파일을 스테이징 영역에 추가
git add .

# 스테이징된 파일의 변경 사항을 취소 (Unstage)
git reset <file_name>

# 스테이징된 내용을 메시지와 함께 커밋(저장)
git commit -m "작업 내용 요약 메시지"

```

---

## 6. 🌐 협업 및 동기화 (Syncing)

GitHub(Remote)와 로컬(Local)을 연결하여 데이터를 주고받습니다.

```bash
# 현재 브랜치의 내용을 원격 저장소(origin)에 업로드
# (-u 옵션: 이후 git push만 입력해도 되도록 업스트림 설정)
git push -u origin <branch_name>

# 원격 저장소의 변경 사항을 가져와 현재 브랜치에 병합
git pull origin <branch_name>

# 다른 브랜치의 내용을 현재 브랜치로 병합 (Combine)
git merge <branch_name>

```

---

## 7. 🔍 이력 및 차이 확인 (Inspection)

과거의 기록을 조회하거나 변경된 코드를 확인합니다.

```bash
# 전체 커밋 히스토리(로그) 확인
git log

# 한 줄로 깔끔하게 히스토리 및 그래프 확인
git log --oneline --graph --all

# 작업 디렉토리와 최근 커밋 간의 코드 차이(내용) 확인
git diff

```

---

## 8. 📦 임시 저장 (Stashing)

작업 중인 코드를 커밋하지 않고 잠시 보관해야 할 때 사용합니다.

```bash
# 작업 중인 변경 사항 임시 저장 (워킹 디렉토리는 깨끗해짐)
git stash

# 임시 저장했던 내용 다시 불러오기 (가장 최근 내용 복구)
git stash pop

```

```

```
