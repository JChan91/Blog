---
emoji: 🤖
title: Jpa @Annotation
date: '2021-06-20 18:00:00'
author: JChan
tags: Java, JPA
categories: Spring
---

JPA를 통해 관리하게 되는 객체를 엔티티 클래스라고 말한다. 이 엔티티 클래스는 데이터베이스의 테이블과 같은 구조로 작성해야 한다

## @Entity

JPA를 통해 DB의 테이블과 연결되고 관리되는 엔티티 객체라는 것을 의미하며 반드시 있어야하는 어노테이션이다

## @Table

엔티티 클래스를 DB에서 어떠한 테이블로 생성할 것인지에 대한 정보를 담기 위한 어노테이션이다

이 어노테이션을 생략할 시 엔티티 클래스 이름이 테이블 이름으로 생성된다

## @Id

@Entity가 붙은 클래스는 반드시 Primary Key를 @Id로 지정을 해줘야한다.

이 @Id를 사용자가 직접 입력하지 않는다면 @GeneratedValue 어노테이션을 활용해야 한다

## @GeneratedValue(strategy = GenerationType.AUTO)

PK 값을 자동으로 생성하고자 할 때 사용된다

### strategy

- AUTO(default) : JPA 구현체(Spring boot에서는 hibernate)가 생성 방식을 결정
- IDENTITY : 사용하는 데이터베이스가 키 생성을 결정
  - MySQL이나 MariaDB 경우 auto increment 방식을 이용
- SEQUENCE : 데이터베이스의 시퀀스를 이용해 키를 생성, `@SequenceGenerator`와 같이 사용
- TABLE : 키 생성 전용 테이블을 생성해서 키를 생성, `@TableGenerator`와 함께 사용
