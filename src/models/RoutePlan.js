export class RoutePlan {
  constructor({ routes = [] }) {
    this.routes = routes;
  }

  forTarget(target) {
    return this.routes.filter(r => r.target === target);
  }
}
