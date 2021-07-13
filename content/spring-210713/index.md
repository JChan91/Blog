---
emoji: 👮
title: AOP, Filter, Interceptor
date: '2021-07-13 17:30:00'
author: JChan
tags: Java
categories: Java
---

## AOP(Aspect Oriented Programming)

OOP의 단점을 완화하기 위한 개념, 공통적으로 적용될 모듈을 만든 후 적용하고자 하는 부분의 코드 밖에서 삽입하는 방법

개발자가 만드는 코드(핵심 기능)말고 외부에서 만든 부가 코드(부가 기능)도 많이 사용할 텐데 추후 핵심 기능 + 부가 기능 코드로 인해 복잡해지고 코드 직관성을 해친다.

이를 스프링에게 맡겨 핵심 기능의 특정 메소드(PointCut)에 언제, 어떤 코드(Advice)를 부가 기능을 사용하도록 실행시킬 수 있다. 그리고 인터셉터와 달리 Controller에서 받는 파라미터를 Aspect에서도 파라미터를 받을 수 있어 Controller를 제어할 수 있다.

> 사용하기 위해선 AspectJrt(Runtime)와 AspectJ weaver가 필요하다

인터셉터는 클라이언트의 요청이 올 때마다 수행하지만, Aspect는 특정 메소드가 호출될 때마다 수행할 수 있다. 즉, AOP는 클래스나 메소드에서도 동작한다.

### Runtime Exception

unCheck?

## Filter

HTTP 요청과 응답이 있는 웹 환경에서 대해 스프링 영역(dispatcherServlet) 밖(WAS 영역)에서 응답을 변경할 수 있는 클래스

@Configuration으로 사용한다. 이 어노테이션은 Spring의 어노테이션이다
스프링부트는 XML을 사용안해서 스프링의 도움을 받는다

### 언제 사용되는가?

- XSS
- Logging
- Encoding
- IP Check 등

## Interceptor

Filter와 유사하나 실행되는 시기가 DispatcherServlet에서 처리된 후에 실행된다
AOP 사용은 복잡하지만 Interceptor은 수월하게 사용할 수 있고 Filter와 마찬가지로 웹 환경에서만 구동가능하다

Filter는 WAS 영역이라 스프링의 범위 안에서 동작이 되기에 스프링의 기능을 사용할 수 있다
Repository, 사용자 접근 등..
