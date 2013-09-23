
//
// category    Performance
// action      Navigation / Timing
// label       Something
// value       value
//
function gaPerformance () {
   var sendEvent = function (category, action, label, value, opt_noninteraction) {
      category = category || 'Performance';
      if (typeof value !== 'undefined' && value < 0) {
         return;
      }
      console.log({category: category, action: action, label: label, value: value, opt_noninteraction: opt_noninteraction});
      if (typeof _gaq !== 'undefined' && typeof _gaq.push === 'function') {
         _gaq.push(['_trackEvent', category, action, label, value, opt_noninteraction]);
      }
   };
   if (typeof window.performance !== 'undefined') {
      var navigation = window.performance.navigation;
      var timing = window.performance.timing;

      sendEvent(undefined, 'Navigation', 'redirectCount', navigation.redirectCount, true);
      sendEvent(undefined, 'Timing', 'Redirect', (timing.redirectEnd - timing.redirectStart), true);
      sendEvent(undefined, 'Timing', 'ApplicationCache', (timing.domainLookupStart - timing.fetchStart), true);
      sendEvent(undefined, 'Timing', 'DNS Lookup', (timing.domainLookupEnd - timing.domainLookupStart), true);
      sendEvent(undefined, 'Timing', 'TCP Connection', (timing.connectEnd - timing.connectStart), true);
      sendEvent(undefined, 'Timing', 'Request Time', (timing.responseStart - timing.requestStart), true);
      sendEvent(undefined, 'Timing', 'Response Time', (timing.responseEnd - timing.responseStart), true);
      sendEvent(undefined, 'Timing', 'DOM Interactive Time', (timing.domInteractive - timing.domLoading), true);
      sendEvent(undefined, 'Timing', 'DOM Complete', (timing.domComplete - timing.domLoading), true);
      sendEvent(undefined, 'Timing', 'onLoad Event', (timing.loadEventEnd - timing.loadEventStart), true);
      sendEvent(undefined, 'Timing', 'Total Time', (timing.loadEventEnd - timeing.navigationStart), true);
   }
}


