<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-center">
      <div class="text-4xl font-bold py-16">
        Trading View Widget
      </div>
    </div>
    <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <li
        class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
      >
        <!-- TradingView Widget BEGIN -->
        <div class="tradingview-widget-container">
          <div class="tradingview-widget-container__widget"></div>
          <div class="tradingview-widget-copyright">
            <a
              href="https://www.tradingview.com/symbols/BTCUSDT/technicals/"
              rel="noopener"
              target="_blank"
              ><span class="blue-text">Technical Analysis for BTCUSDT</span></a
            >
            by TradingView
          </div>
        </div>
        <!-- TradingView Widget END -->
      </li>
      <li
        class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
      >
        2
      </li>
      <li
        class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
      >
        3
      </li>
      <li
        class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
      >
        4
      </li>

      <!-- More people... -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      interval: "1D",
      width: "425",
      isTransparent: true,
      height: "450",
      symbol: "BINANCE:BTCUSDT",
      showIntervalTabs: true,
      locale: "en",
      colorTheme: "light"
    };
  },
  mounted() {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js')
    document.head.appendChild(recaptchaScript)
  },
  methods: {},
};
</script>

