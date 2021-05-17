---
Layout:
Title:	"Swith Method"
Date:	2021-05-17
Categories:

---

# Introduction

today I solved a katar using switch method.

# Body

- The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case.

      Syntax
switch (expression) {
  case value1:
    //Statements executed when the
    //result of expression matches value1
    [break;]
  case value2:
    //Statements executed when the
    //result of expression matches value2
    [break;]
  ...
  case valueN:
    //Statements executed when the
    //result of expression matches valueN
    [break;]
  [default:
    //Statements executed when none of
    //the values match the value of the expression
    [break;]]
}

* expression
An expression whose result is matched against each case clause.

* case valueN (Optional)
A case clause used to match against expression. If the expression matches the specified valueN, the statements inside the case clause are executed until either the end of the switch statement or a break.

* default (Optional)
A default clause; if provided, this clause is executed if the value of expression doesn't match any of the case clauses.

- A switch statement first evaluates its expression.
- It then looks for the first case clause whose expression evaluates to the same value as the result of the input expression.
- it then  transfers control to that clause, executing the associated statements.
- If no matching case clause is found, the program looks for the optional default clause, and if found, transfers control to that clause, executing the associated statements. 
- If no default clause is found, the program continues execution at the statement following the end of switch.
- By convention, the default clause is the last clause, but it does not need to be so.

# Conclusion

- The optional break statement associated with each case label ensures that the program breaks out of switch once the matched statement is executed and continues execution at the statement following switch.
-  If break is omitted, the program continues execution at the next statement in the switch statement.
- The break statement is not required if a return statement precedes it.