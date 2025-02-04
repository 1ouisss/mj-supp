type PerformanceMetric = {
  name: string;
  startTime: number;
  duration?: number;
};

class PerformanceMonitor {
  private static metrics: PerformanceMetric[] = [];

  static startMeasure(name: string) {
    this.metrics.push({
      name,
      startTime: performance.now()
    });
    console.log(`📊 Starting measurement: ${name}`);
  }

  static endMeasure(name: string) {
    const metric = this.metrics.find(m => m.name === name && !m.duration);
    if (metric) {
      metric.duration = performance.now() - metric.startTime;
      console.log(`📊 ${name} took ${metric.duration.toFixed(2)}ms`);
    }
  }

  static clearMetrics() {
    this.metrics = [];
  }
}

export default PerformanceMonitor;