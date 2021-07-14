---
emoji: 🤖
title: Servlet, Serlvet Container
date: '2021-06-20 18:00:00'
author: JChan
tags: Java, Spring
categories: Spring
---

# 서블릿(Servlet)

서버 쪽에서 실행되면서 **클라이언트의 요청에 따라 동적으로 서비스를 제공**하는 자바 클래스다. 톰캣과 같은 WAS가 web.xml에 매핑된 자바 파일을 서블릿으로 변환시키고 그 서블릿을 실행해 요청에 응답하게 된다

서블릿으로 변환시키려면 톰캣에서 만들어 놓은 **HttpServlet 클래스를 상속**해야 한다. 이 HttpServlet 클래스는 **GenericServlet 클래스를 상속**받으며, GenericServlet은 **Servlet과 ServletConfig 인터페이스의 추상 메소드를 구현**한다.

### HttpServlet의 주요 메소드

![](<https://images.velog.io/images/fourbin1221/post/8fe81883-9da8-46df-9e96-abcf5bcfc76c/carbon%20(4).png>)

모든 메소드는 **`public service()`** → **`protected service()`** → **`do...()`** 순으로 호출된다

## 서블릿 생명주기(Life Cycle) 메소드

서블릿도 자바 클래스이기에 생성 및 초기화, 서비스 수행 등 과정을 거친다

### 초기화(init())

- 서블릿 요청 시 맨 처음 한 번만 호출된다
- 서블릿 생성 시 초기화 작업을 주로 수행한다

### 작업 수행(doGet(), doPost())

- 서블릿 요청 시 매번 호출된다
- 실제로 클라이언트 요청의 작업을 수행한다

### 종료(destroy())

- 서블릿 기능을 수행한 뒤 메모리에서 소멸될 때 호출된다

## Serlvet Container
