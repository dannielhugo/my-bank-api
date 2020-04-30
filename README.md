# My Bank API

This is a work made at IGTI's API201-A discipline.

It represents a bank API.



## Endpoints


### POST /accounts

Creates an account

```json
Body
{
	"name": "My account",
	"balance": 100
}
```

---

### GET /accounts/:id

Get an account and its balance

---

### DEL /accounts/:id

Delete an account

---

### PATCH /accounts/:id/deposit

Make a deposit to an account

```json
Body
{
	"balance": 100
}
```
---


### PATCH /accounts/:id/debit

Make a debit to an account

```json
Body
{
	"balance": 100
}
```
---

## Instalation and execution

* Clone the project

* Install packages
```bash
$ cd my-bank-api/
$ npm install
```
* Execute the server
```bash
$ npm run start
```

> Requires NodeJs@^12.x

## Insomnia 

Download [this file](/Insomnia_2020-04-29.json) and execute on [Insomnia](https://insomnia.rest/).