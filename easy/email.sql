-- Write a solution to report all the duplicate emails. Note that it's guaranteed that the email field is not NULL.


--solution below

SELECT email FROM person GROUP BY email HAVING COUNT(*)>1;
