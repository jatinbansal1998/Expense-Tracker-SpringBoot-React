insert into user (ID, USER_NAME, USER_EMAIL)
values (user_seq.nextval, 'Siamak', 'Codeengine11@gmail.com');
insert into user (ID, USER_NAME, USER_EMAIL)
values (user_seq.nextval, 'John', 'John@john.com');
insert into user (ID, USER_NAME, USER_EMAIL)
values (user_seq.nextval, 'Adam', 'adam@adam.com');


insert into category
values (category_seq.nextval, 'Travel', 1);
insert into category
values (category_seq.nextval, 'Auto Loan', 1);
insert into category
values (category_seq.nextval, 'Travel', 1);

insert into category
values (category_seq.nextval, 'Credit Card Bill', 2);
insert into category
values (category_seq.nextval, 'Auto Loan', 2);

insert into category
values (category_seq.nextval, 'Student Loan', 3);
insert into category
values (category_seq.nextval, 'Travel Loan', 3);
insert into category
values (category_seq.nextval, 'Ticket', 3);
insert into category
values (category_seq.nextval, 'Food', 3);


insert into expense
values (expense_seq.nextval, 'New York Business Trip', '2019-06-16T17:00:00.000Z', 'New York', 1, 1);
insert into expense
values (expense_seq.nextval, 'Ford Mustang Payment', '2019-06-15T15:00:00.000Z', 'LA, CA', 2, 2);
insert into expense
values (expense_seq.nextval, 'Grand Canyon Trip With Family', '2019-06-15T15:00:00.000Z', 'Grand Canyon', 3, 1);
