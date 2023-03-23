export class BooleanCalculator {
  static evaluate(expression: string): boolean {
    expression = expression.toLowerCase();

    if (expression.includes("(")) {
      expression = expression.replace(/\([^)]+\)/, (match) => {
        const subExpression = match.slice(1, match.length - 1);
        return String(this.evaluate(subExpression));
      });
    }

    if (expression.includes(" or ")) {
      const [leftSubExpression, rightSubExpression] = expression.split(" or ");

      if (!leftSubExpression || !rightSubExpression)
        throw new Error("Invalid Expression");

      return (
        this.evaluate(leftSubExpression) || this.evaluate(rightSubExpression)
      );
    }

    if (expression.includes(" and ")) {
      const [leftSubExpression, rightSubExpression] = expression.split(" and ");

      if (!leftSubExpression || !rightSubExpression)
        throw new Error("Invalid Expression");

      return (
        this.evaluate(leftSubExpression) && this.evaluate(rightSubExpression)
      );
    }

    if (expression === "not true") return false;
    if (expression === "not false") return true;
    if (expression === "true") return true;

    return false;
  }
}
