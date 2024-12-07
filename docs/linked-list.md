---
title: "Linked List"
date: "2024-12-07"
parent: data-structures-and-algorithms
author: Asif-102
category: "DSA"
tags: ["DSA"]
---

# Linked List

Linked List ২ রকমের হয়:

1. Singly Linked List
2. Doubly Linked List

## About Singly Linked List

Singly Linked List এমন একটি ডেটা স্ট্রাকচার যেখানে ডেটার একটি সিকোয়েন্স থাকে, এবং প্রতিটি ডেটার সাথে একটি পয়েন্টার থাকে যা পরবর্তী ডেটার দিকে নির্দেশ করে। এটি একটি একমুখী ডেটা স্ট্রাকচার, অর্থাৎ, আপনি কেবলমাত্র সামনের দিকে যেতে পারবেন।

যেমনঃ
আপনার লিস্ট যদি হয় ১->২->৩ তাহলে আপনি ১ থেকে ২এ এবং ২ থেকে ৩এ যেতে পারবেন
কিন্তু ৩ থেকে ২এ এবং ২ থেকে ১এ যেতে পারবেন না।

### Singly Linked List এর প্রধান বৈশিষ্ট্য

1. প্রতিটি নোডে দুটি অংশ থাকেঃ

-     ডেটা (data):  যেটি ভালু ধরে রাখে
-     পয়েন্টার (next):  যেটি পরবর্তী নোডের ঠিকানা নির্দেশ করে

2. প্রথম নোডকে head বলা হয়।
3. শেষ নোডের next পয়েন্টার NULL থাকে।

### Singly Linked List এর অপারেশন

1. নোড যোগ করা (Insertion):

-     শুরুতে
-     শেষে
-     নির্দিষ্ট স্থানে

2. নোড মুছে ফেলা (Deletion):

-     শুরু থেকে
-     শেষ থেকে
-     নির্দিষ্ট স্থানে

3. তালিকার প্রদর্শন (Traversal):

-     পুরো লিস্ট ডিসপ্লে করা

### C++ এ Singly Linked List এর Implementation

নীচে Singly Linked List এর জন্য একটি সহজ উদাহরণ দেওয়া হলো:

```
#include <bits/stdc++.h>
using namespace std;

// নোডের জন্য ক্লাস ডিফাইন
class Node{
public:
    int data; // ডেটা ষ্টোর করার জন্য
    Node* next; // পরবর্তী নোডের পয়েন্টার

    Node(int val){ // কনস্ট্রাক্টর
        this->data = val;
        this->next = NULL;
    }
};

// Linked List ক্লাস ডিফাইন
class SinglyLinkedList{
private:
    Node* head;

public:
    // কনস্ট্রাক্টর
    SinglyLinkedList(){
        head = NULL;
    }

    // 1. শুরুতে নোড যোগ করা
    void insertAtBeginning(int val){
        Node* newNode = new Node(val);
        newNode->next = head;
        head = newNode;
    }

    // 2. শেষে নোড যোগ করা
    void insertAtEnd(int val){
        Node* newNode = new Node(val);
        if(head == NULL){ // যদি লিস্ট ফাঁকা থাকে
            head = newNode;
            return;
        }

        Node* temp = head;
        while(temp->next != NULL){ // লিস্টের শেষে পৌঁছানো
            temp = temp->next;
        }
        temp->next = newNode;
    }

    // 3. নির্দিষ্ট স্থানে নোড যোগ করা
    void insertAtPosition(int val, int pos){
        Node* newNode = new Node(val);

        if(pos == 1){ // শুরুতে যোগ করা
            newNode->next = head;
            head = newNode;
            return;
        }

        Node* temp = head;
        for(int i = 1; i < pos-1 && temp != NULL; i++){
            temp = temp->next;
        }
        if(temp == NULL){
            cout << "Invalid position\n";
            return;
        }

        newNode->next = temp->next;
        temp->next = newNode;
    }

    // 4. ডিসপ্লে (Traversal)
    void display(){
        if(head == NULL){
            cout << "List is empty!\n";
            return;
        }

        Node* temp = head;
        while (temp != NULL){
            cout << temp->data << " -> ";
            temp = temp->next;
        }
        cout << "NULL\n";
    }

    // 5. শুরু থেকে নোড মুছে ফেলা
    void deleteFromBeginning() {
        if(head == NULL){
            cout << "List is empty!\n";
            return;
        }
        Node* temp = head;
        head = head->next;
        delete temp;
    }

    // 6. শেষে নোড মুছে ফেলা
    void deleteFromEnd(){
        if (head == NULL) {
            cout << "List is empty!" << endl;
            return;
        }

        if(head->next == NULL){ // যদি একটিমাত্র নোড থাকে
            delete head;
            head = NULL;
            return;
        }

        Node* temp = head;
        while(temp->next->next != NULL){
            temp = temp->next;
        }
        delete temp->next;
        temp->next = NULL;
    }

};

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    SinglyLinkedList list;

    list.insertAtBeginning(10);
    list.insertAtBeginning(20);
    list.insertAtEnd(30);
    list.insertAtPosition(15, 2);
    list.display(); // Output: 20 -> 15 -> 10 -> 30 -> NULL

    list.deleteFromBeginning();
    list.display(); // Output: 15 -> 10 -> 30 -> NULL

    list.deleteFromEnd();
    list.display(); // Output: 15 -> 10 -> NULL

    return 0;
}
```

### ব্যাখ্যা:

1. Node ক্লাস: প্রতিটি নোডের ডেটা এবং পরবর্তী নোডের ঠিকানা থাকে।
2. SinglyLinkedList ক্লাস: সমস্ত অপারেশন (যেমন, insertion, deletion, traversal) এখানে ডিফাইন করা।
3. main ফাংশন: এখানে আমরা লিস্ট তৈরি করে বিভিন্ন অপারেশন চালাই।

## About Doubly Linked List

একটি Doubly Linked List (ডাবলি লিঙ্কড লিস্ট) হলো এমন একটি ডেটা স্ট্রাকচার, যেখানে প্রতিটি নোডের দুটি পয়েন্টার থাকে।

1. একটি পয়েন্টার পূর্ববর্তী নোডের ঠিকানায় নির্দেশ করে (prev)।
2. অন্যটি পরবর্তী নোডের ঠিকানায় নির্দেশ করে (next)।

### Doubly Linked List এর প্রধান বৈশিষ্ট্য:

1. প্রথম নোডকে (head) বলা হয়।
2. শেষ নোডের (tail) পরবর্তী পয়েন্টার NULL থাকে।
3. এটি সামনে এবং পিছনে উভয় দিকেই ট্রাভার্স করা যায়।

### Doubly Linked List এ অপারেশন:

1. নোড যোগ করা (Insertion):

-     শুরুতে
-     শেষে
-     নির্দিষ্ট স্থানে

2. নোড মুছে ফেলা (Deletion):

-     শুরু থেকে
-     শেষ থেকে
-     নির্দিষ্ট স্থানে

3. তালিকার প্রদর্শন (Traversal):

-     সামনে থেকে
-     পিছন থেকে

### C++ এ Doubly Linked List এর Implementation

```
#include <bits/stdc++.h>
using namespace std;

// নোডের জন্য ক্লাস ডিফাইন
class Node{
public:
    int data; // ডেটা ধারণ করার জন্য
    Node* prev; // পূর্ববর্তী নোডের পয়েন্টার
    Node* next; // পরবর্তী নোডের পয়েন্টার

    Node(int val){ // কনস্ট্রাক্টর
        this->data = val;
        this->prev = NULL;
        this->next = NULL;
    }
};

// Doubly Linked List ক্লাস
class DoublyLinkedList{
private:
    Node* head; // লিস্টের প্রথম নোড
    Node* tail; // লিস্টের শেষ নোড

public:
    // কনস্ট্রাক্টর
    DoublyLinkedList(){
        head = NULL;
        tail = NULL;
    }

    // 1. শুরুতে নোড যোগ করা
    void insertAtBeginning(int val){
        Node* newNode = new Node(val);
        if(head == NULL){ // লিস্ট ফাঁকা থাকলে
            head = tail = newNode;
            return;
        }
        newNode->next = head;
        head->prev = newNode;
        head = newNode;
    }

    // 2. শেষে নোড যোগ করা
    void insertAtEnd(int val){
        Node* newNode = new Node(val);
        if(head == NULL){ // লিস্ট ফাঁকা থাকলে
            head = tail = newNode;
            return;
        }
        newNode->prev = tail;
        tail->next = newNode;
        tail = newNode;
    }

    // 3. নির্দিষ্ট স্থানে নোড যোগ করা
    void insertAtPosition(int val, int pos){
        if(pos == 1){ // শুরুতে যোগ করা
            insertAtBeginning(val);
            return;
        }

        Node* newNode = new Node(val);
        Node* temp = head;
        for(int i = 1; i < pos - 1 && temp != NULL; i++){
            temp = temp->next;
        }
        if(temp == NULL){
            cout << "Invalid position!\n";
            return;
        }
        newNode->next = temp->next;
        newNode->prev = temp;
        if (temp->next != NULL) {
            temp->next->prev = newNode;
        } else {
            tail = newNode; // যদি নতুন নোডটি শেষ হয়ে থাকে
        }
        temp->next = newNode;
    }

    // 4. সামনে থেকে প্রদর্শন করা
    void displayForward(){
        Node* temp = head;
         while (temp != NULL) {
            cout << temp->data << " -> ";
            temp = temp->next;
        }
        cout << "NULL\n";
    }

    // 5. পিছন থেকে প্রদর্শন করা
    void displayReverse() {
        Node* temp = tail;
        while (temp != NULL) {
            cout << temp->data << " -> ";
            temp = temp->prev;
        }
        cout << "NUL\n";
    }

    // 6. শুরু থেকে নোড মুছে ফেলা
    void deleteFromBeginning(){
        if(head == NULL){
            cout << "List is empty!\n";
            return;
        }
        Node* temp = head;
        if (head == tail) { // একটিমাত্র নোড থাকলে
            head = tail = NULL;
        } else {
            head = head->next;
            head->prev = NULL;
        }
        delete temp;
    }

    // 7. শেষে নোড মুছে ফেলা
    void deleteFromEnd(){
        if (head == NULL) {
            cout << "List is empty!\n";
            return;
        }

        Node* temp = tail;
        if(head == tail){ // একটিমাত্র নোড থাকলে
            head = tail = NULL;
        }else{
            tail = tail->prev;
            tail->next = NULL;
        }
        delete temp;
    }
};

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0);

    DoublyLinkedList list;

    list.insertAtBeginning(10);
    list.insertAtBeginning(20);
    list.insertAtEnd(30);
    list.insertAtPosition(15, 2);

    cout << "Forward Display: ";
    list.displayForward(); // Output: 20 -> 15 -> 10 -> 30 -> NULL

    cout << "Reverse Display: ";
    list.displayReverse(); // Output: 30 -> 10 -> 15 -> 20 -> NULL

    list.deleteFromBeginning();
    cout << "After Deleting from Beginning: ";
    list.displayForward(); // Output: 15 -> 10 -> 30 -> NULL

    list.deleteFromEnd();
    cout << "After Deleting from End: ";
    list.displayForward(); // Output: 15 -> 10 -> NULL

    return 0;
}
```

### ব্যাখ্যা:

1.  Node ক্লাস:

    প্রতিটি নোডের মধ্যে ডেটা এবং দুইটি পয়েন্টার থাকে:

    -      prev পূর্ববর্তী নোডের জন্য।
    -      next পরবর্তী নোডের জন্য।

2.  DoublyLinkedList ক্লাস:

-     অপারেশনগুলো (যেমন, insertion, deletion, traversal) এখানে সংজ্ঞায়িত।

3. main ফাংশন:

-     এখানে Doubly Linked List তৈরি করে বিভিন্ন অপারেশন চালানো হয়েছে।
