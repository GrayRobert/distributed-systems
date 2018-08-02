DROP TABLE IF EXISTS chat_message;
CREATE TABLE chat_message (
  id bigint auto_increment PRIMARY KEY,
  type varchar(20),
  content varchar(255),
  sender varchar(255),
  recipient varchar(255),
  sent datetime,
  received datetime
);