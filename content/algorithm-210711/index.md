---
emoji: 🤖
title: BOJ, 1026 보물
date: '2021-07-11 18:00:00'
author: JChan
tags: Algorithm, BOJ
categories: Algorithm
---

# BOJ, 1026 보물

[보물](https://www.acmicpc.net/problem/1026)

## 문제

- 시간 제한 : 2초
- 메모리 제한 128MB

옛날 옛적에 수학이 항상 큰 골칫거리였던 나라가 있었다. 이 나라의 국왕 김지민은 다음과 같은 문제를 내고 큰 상금을 걸었다.

길이가 N인 정수 배열 A와 B가 있다. 다음과 같이 함수 S를 정의하자.

S = A[0]×B[0] + ... + A[N-1]×B[N-1]

S의 값을 가장 작게 만들기 위해 A의 수를 재배열하자. 단, B에 있는 수는 재배열하면 안 된다.

S의 최솟값을 출력하는 프로그램을 작성하시오.

## 입력

첫째 줄에 N이 주어진다. 둘째 줄에는 A에 있는 N개의 수가 순서대로 주어지고, 셋째 줄에는 B에 있는 수가 순서대로 주어진다. N은 50보다 작거나 같은 자연수이고, A와 B의 각 원소는 100보다 작거나 같은 음이 아닌 정수이다.

5

1 1 1 6 0

2 7 8 3 1

## 출력

18

## 시도

'B에 있는 수는 재배열하면 안 된다.' 라는 글이 있어서 정렬을 하지 않고 어떻게 풀 수 있을까 고민하다 해결책이 안떠올라 A, B 전부 `Arrays.sort()`를 이용해 풀었다.
예제 입력을 통해 출력도 제대로 나와서 제출했는데 계속 **틀렸다**고 뜨길래 뭔지 싶더니 문자열로 된 배열을 정렬해서 틀렸다는 걸 알아챌 수 있었다.
한 자리 숫자의 문자열은 비교가 될 수 있어도 두 자리 숫자는 한 자리 숫자가 더 클 수 있다.
String 배열을 다시 한 번 int로 캐스팅하고 난 뒤 제출하니 정상적으로 제출할 수 있었다

```java
// 1026 보물
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Arrays;

public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

    int testCase = Integer.parseInt(br.readLine());
    int sum = 0;

    String[] A = br.readLine().split(" ");
    String[] B = br.readLine().split(" ");

    int[] intA = new int[testCase];
    int[] intB = new int[testCase];

    for(int i = 0 ; i < testCase; i++) {
      intA[i] = Integer.parseInt(A[i]);
      intB[i] = Integer.parseInt(B[i]);
    }

    Arrays.sort(intA);
    Arrays.sort(intB);

    for(int i = 0; i < A.length; i++) {
      sum += (intA[i] * intB[testCase - i - 1]);
    }

    bw.write(sum + "\n");
    bw.flush();

    br.close();
    bw.close();
  }
}
```
