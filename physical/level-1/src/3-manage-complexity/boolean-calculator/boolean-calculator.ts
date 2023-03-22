export class BooleanCalculator {
  static evaluate(expression: string): boolean {
    if (expression.includes(" AND ")) {
      const [leftExpression, rightExpression] = expression.split(" AND ");
      if (!leftExpression || !rightExpression)
        throw new Error("Invalid expression");
      return this.evaluate(leftExpression) && this.evaluate(rightExpression);
    }
    if (expression === "NOT TRUE") return false;
    if (expression === "NOT FALSE") return true;
    if (expression === "TRUE") return true;
    return false;
  }
}
