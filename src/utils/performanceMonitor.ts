type PerformanceMetric = {
  name: string;
  startTime: number;
  duration?: number;
  memoryUsage?: number;
};

class PerformanceMonitor {
  private static metrics: PerformanceMetric[] = [];
  private static readonly PERFORMANCE_THRESHOLD = 50; // 50ms threshold

  static startMeasure(name: string) {
    const startTime = performance.now();
    const memoryUsage = (window.performance as any).memory?.usedJSHeapSize;
    
    this.metrics.push({
      name,
      startTime,
      memoryUsage
    });
    
    console.log(`📊 Starting measurement: ${name}`);
  }

  static endMeasure(name: string) {
    const metric = this.metrics.find(m => m.name === name && !m.duration);
    if (metric) {
      metric.duration = performance.now() - metric.startTime;
      console.log(`📊 ${name} took ${metric.duration.toFixed(2)}ms`);
      
      if (metric.duration > this.PERFORMANCE_THRESHOLD) {
        console.warn(`⚠️ Performance warning: ${name} exceeded ${this.PERFORMANCE_THRESHOLD}ms threshold`);
      }
    }
  }

  static getMetrics(): PerformanceMetric[] {
    return this.metrics;
  }

  static getMetric(name: string): PerformanceMetric | undefined {
    return this.metrics.find(m => m.name === name);
  }

  static clearMetrics() {
    this.metrics = [];
  }

  static generateReport(): string {
    const report = this.metrics.map(metric => ({
      name: metric.name,
      duration: metric.duration?.toFixed(2) + 'ms',
      memory: metric.memoryUsage ? (metric.memoryUsage / 1024 / 1024).toFixed(2) + 'MB' : 'N/A'
    }));

    return JSON.stringify(report, null, 2);
  }
}

export default PerformanceMonitor;