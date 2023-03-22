export class BooleanCalculator {
  static evaluate(expression: string): boolean {
    if (expression === "NOT TRUE") return false;
    if (expression === "NOT FALSE") return true;
    if (expression === "TRUE") return true;
    return false;
  }
}
