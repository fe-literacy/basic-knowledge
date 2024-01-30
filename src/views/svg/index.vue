<template>
  <div class="svg-wrapper">
    <svg height="500" width="500">
      <rect
        x="0"
        y="0"
        height="500"
        width="500"
        fill="#f8fefb"></rect>
      <!-- 滑梯 -->
      <path  d="M 30,122 v 300, h 400" stroke-width="2" fill="url(#gradient)">
      </path>
      <!-- 人 + 滑板 -->
      <g id="myGroup">
        <circle
          cx="50"
          cy="50"
          r="20"
          stroke="#eee"
          fill="#eaf0bc"></circle>
        <path
          id="neck"
          d="M 54,70 v 40, h -10, v -40"
          stroke-width="2"
          fill="#eaf0bc"></path>
        <path
          id="neck"
          d="M 45,80 v 5, h -30"
          stroke-width="2"
          fill="#eaf0bc"></path>
        <path
          id="neck"
          d="M 54,80 v 5, h 30"
          stroke-width="2"
          fill="#eaf0bc"></path>
        <path
          id="neck"
          d="M 45,100 v 30, h -6"
          stroke-width="2"
          fill="#eaf0bc"></path>
        <path
          id="neck"
          d="M 52,100 v 40, h 6"
          stroke-width="2"
          fill="#eaf0bc"></path>
        <text
          font-size="18"
          x="50"
          y="56"
          text-anchor="middle"
          fill="#666">Fe</text>
        <path
          id="path"
          transform-origin="54 110"
          transform="rotate(-53)"
          d="M 30,110 v 50, h 3"
          stroke-width="2"
          fill="red"></path>
        <animateTransform
          attributeName="transform"
          type="translate"
          from="0 0"
          to="350 264"
          dur="2s"
          repeatCount="indefinite" />
        <animate
          attributeName="opacity"
          values="1;0.8;0.8;0.6;0.2"
          dur="2s"
          repeatCount="indefinite" />
      </g>

      <linearGradient
        id="gradient"
        x1="00%"
        y1="0%"
        x2="50%"
        y2="0%">
        <stop offset="0%" style="stop-color: #a1f7b2; stop-opacity: 1;" />
        <stop offset="100%" style="stop-color: #e6b2b2ee; stop-opacity: 1;" />
      </linearGradient>
    </svg>
  </div>
</template>
