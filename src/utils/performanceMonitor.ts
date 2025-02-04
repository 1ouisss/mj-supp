class PerformanceMonitor {
  private logToConsole(eventName: string, details?: Record<string, any>) {
    console.log(`[Performance] ${eventName}`, details || '');
    if (window.performance && window.performance.now) {
      console.log(`Timestamp: ${window.performance.now().toFixed(2)}ms`);
    }
  }

  logEvent(eventName: string, details?: Record<string, any>) {
    this.logToConsole(eventName, details);
    // Here we could add real performance monitoring service integration
    // like Google Analytics, New Relic, etc.
  }

  measureTimeSpent(label: string, callback: () => void) {
    const start = performance.now();
    callback();
    const end = performance.now();
    this.logToConsole(`Time spent on ${label}`, {
      duration: `${(end - start).toFixed(2)}ms`
    });
  }
}

export const performanceMonitor = new PerformanceMonitor();