"use client";
import React from "react";
import { motion, useInView, useAnimate } from "framer-motion";

const HeroAsset = () => {
  const [scope, animate] = useAnimate();
  const [shouldPlay, setShouldPlay] = React.useState(false);
  const isInView = useInView(scope, {
    amount: "all",
  });

  React.useEffect(() => {
    if (isInView) {
        setShouldPlay(true);
    }
  }, [isInView]);

  return (
    <div className="z-[0] w-full flex items-center justify-center animate-[enter_0.6s_ease-in_backwards_0.4s]"  ref={scope}>
      <motion.svg
        initial="hidden"
        height="100%"
        width="75%"
        viewBox="0 0 1705 961"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_448_78)">
          <g opacity="0.67">
            <circle
              cx="852.5"
              cy="852.5"
              r="850.485"
              fill="url(#paint0_radial_448_78)"
              stroke="#4C2A2A"
              strokeWidth="4.03073"
            />
            <circle
              cx="852.5"
              cy="852.5"
              r="785.638"
              fill="url(#paint1_radial_448_78)"
              stroke="#4C2A2A"
              strokeWidth="3.7234"
            />
            <circle
              cx="852.5"
              cy="852.5"
              r="574.139"
              fill="url(#paint2_radial_448_78)"
              stroke="#4C2A2A"
              strokeWidth="2.72104"
            />
            <circle
              cx="852.5"
              cy="852.5"
              r="384.589"
              fill="url(#paint3_radial_448_78)"
              stroke="#4C2A2A"
              strokeWidth="1.8227"
            />
            <circle
              cx="852.5"
              cy="852.5"
              r="211"
              fill="url(#paint4_radial_448_78)"
              stroke="#4C2A2A"
            />
          </g>
          <circle
            cx="872.5"
            cy="776.5"
            r="978.5"
            fill="url(#paint5_radial_448_78)"
          />
          <path
            d="M67.5039 847.755L1637.01 857.286"
            stroke="url(#paint6_radial_448_78)"
          />
        </g>
        <g clipPath="url(#clip1_448_78)">
          <path
            d="M175.504 455.755L1529.97 1248.76"
            stroke="url(#paint7_radial_448_78)"
          />
          <path
            d="M175.504 455.755L1529.97 1248.76"
            stroke="url(#paint8_linear_448_78)"
            strokeWidth="5.30026"
          />
          <path
            d="M67.5039 847.755L1637.01 857.286"
            stroke="url(#paint9_radial_448_78)"
          />
          <path
            d="M170.504 1240.75L1534.5 464.255"
            stroke="url(#paint10_radial_448_78)"
          />
          <path
            d="M170.504 1240.75L1534.5 464.255"
            stroke="url(#paint11_linear_448_78)"
            strokeWidth="5.30026"
          />
          <path
            d="M455.504 1529.75L1248.51 175.286"
            stroke="url(#paint12_radial_448_78)"
          />
          <path
            d="M455.504 1529.75L1153 343"
            stroke="url(#paint13_linear_448_78)"
            strokeWidth="5.30026"
          />
          <path
            d="M847.504 1637.75L857.035 68.2462"
            stroke="url(#paint14_radial_448_78)"
          />
          <path
            d="M847.504 1637.75L857.035 68.2462"
            stroke="url(#paint15_linear_448_78)"
            strokeWidth="5.30026"
          />
          <path
            d="M856.5 156L854.5 468C830.667 468 772.5 472.2 730.5 489"
            stroke="#753333"
            strokeWidth="2"
          />
          <path
            d="M856 156V279C907.833 277.667 1003.5 286.5 1089.5 330.5"
            stroke="#753333"
            strokeWidth="2"
          />
          <path
            d="M856 156V279C907.833 277.667 1003.5 286.5 1089.5 330.5"
            stroke="url(#paint16_linear_448_78)"
            strokeWidth="5"
          />
          <path
            d="M856.5 156L854.5 468C830.667 468 772.5 472.2 730.5 489"
            stroke="url(#paint17_linear_448_78)"
            strokeWidth="5"
          />
          <path
            d="M406.504 78.7549L1183 1442.75"
            stroke="url(#paint18_radial_448_78)"
          />
          <path
            d="M674 549L1183 1443"
            stroke="url(#paint19_linear_448_78)"
            strokeWidth="5.30026"
          />
        </g>
        <circle cx="852.5" cy="857.5" r="103" fill="#421B1B" stroke="#5D4D4D" />
        <path
          d="M905.133 867.582C898.316 860.765 887.184 860.717 880.319 867.582C873.453 874.447 873.501 885.579 880.319 892.397C887.134 899.212 898.316 899.31 905.181 892.445C906.652 890.973 907.828 889.207 908.712 887.343C911.506 890.728 913.813 894.797 915.232 899.357C915.28 899.7 915.575 899.995 915.868 900.093C916.065 900.191 916.358 900.193 916.506 900.045C916.751 899.899 916.946 899.604 916.996 899.164C917.389 893.672 916.653 887.838 914.692 882.443C912.878 877.491 910.181 873.028 906.503 869.055C906.064 868.513 905.574 868.023 905.133 867.582Z"
          fill="#F83A40"
        />
        <path
          d="M835.436 807.116C830.616 815.466 833.45 826.231 841.858 831.085C850.267 835.94 861.007 833.013 865.828 824.663C870.647 816.316 867.847 805.49 859.439 800.635C857.637 799.595 855.626 798.916 853.597 798.546C856.144 794.97 859.477 791.689 863.515 789.138C863.834 789.003 864.042 788.641 864.061 788.333C864.104 788.117 864.03 787.834 863.849 787.729C863.646 787.53 863.31 787.418 862.871 787.484C857.465 788.526 852.02 790.746 847.317 794.037C843.003 797.071 839.39 800.831 836.505 805.412C836.095 805.976 835.747 806.577 835.436 807.116Z"
          fill="#F83A40"
        />
        <path
          d="M804.319 895.069C812.669 899.89 823.434 897.055 828.288 888.647C833.143 880.238 830.216 869.499 821.866 864.678C813.519 859.858 802.693 862.658 797.838 871.067C796.798 872.868 796.119 874.879 795.749 876.908C792.173 874.362 788.892 871.028 786.341 866.99C786.206 866.671 785.845 866.463 785.536 866.444C785.32 866.401 785.037 866.475 784.932 866.656C784.733 866.86 784.621 867.195 784.687 867.633C785.729 873.04 787.949 878.486 791.24 883.188C794.274 887.502 798.035 891.115 802.615 894C803.18 894.411 803.78 894.758 804.319 895.069Z"
          fill="#F83A40"
        />
        <path
          d="M807.254 824.767C807.254 830.803 812.147 835.696 818.183 835.696C824.219 835.696 829.112 830.803 829.112 824.767C829.112 818.731 824.219 813.838 818.183 813.838C812.147 813.838 807.254 818.731 807.254 824.767Z"
          fill="#F83A40"
        />
        <path
          d="M792.484 847.226C792.484 853.262 797.377 858.155 803.413 858.155C809.449 858.155 814.342 853.262 814.342 847.226C814.342 841.19 809.449 836.297 803.413 836.297C797.377 836.297 792.484 841.19 792.484 847.226Z"
          fill="#F83A40"
        />
        <path
          d="M827.984 905.286C827.984 911.323 832.878 916.215 838.913 916.215C844.949 916.215 849.842 911.323 849.842 905.286C849.842 899.251 844.949 894.357 838.913 894.357C832.878 894.357 827.984 899.251 827.984 905.286Z"
          fill="#F83A40"
        />
        <path
          d="M872.43 824.767C872.43 830.803 877.322 835.696 883.359 835.696C889.394 835.696 894.288 830.803 894.288 824.767C894.288 818.731 889.394 813.838 883.359 813.838C877.322 813.838 872.43 818.731 872.43 824.767Z"
          fill="#F83A40"
        />
        <path
          d="M887.582 846.151C887.582 852.187 892.475 857.08 898.511 857.08C904.547 857.08 909.44 852.187 909.44 846.151C909.44 840.115 904.547 835.222 898.511 835.222C892.475 835.222 887.582 840.115 887.582 846.151Z"
          fill="#F83A40"
        />
        <path
          d="M853.723 905.246C853.723 911.282 858.616 916.175 864.652 916.175C870.688 916.175 875.581 911.282 875.581 905.246C875.581 899.21 870.688 894.316 864.652 894.316C858.616 894.316 853.723 899.21 853.723 905.246Z"
          fill="#F83A40"
        />
        <path
          d="M867.812 819.49C869.535 820.19 871.203 820.996 872.81 821.899C873.301 820.087 874.247 818.463 875.517 817.155C873.144 815.819 870.65 814.672 868.057 813.732C868.288 815.634 868.213 817.58 867.812 819.49Z"
          fill="#F83A40"
        />
        <path
          d="M833.19 814.054C830.773 814.98 828.446 816.088 826.227 817.362C827.461 818.701 828.366 820.349 828.81 822.177C830.333 821.296 831.913 820.503 833.543 819.804C833.114 817.931 832.989 815.987 833.19 814.054Z"
          fill="#F83A40"
        />
        <path
          d="M891.758 831.758C890.585 833.166 889.064 834.275 887.328 834.952C888.308 836.33 889.212 837.766 890.033 839.255C891.2 837.822 892.722 836.69 894.466 835.995C893.634 834.535 892.729 833.121 891.758 831.758Z"
          fill="#F83A40"
        />
        <path
          d="M900.853 856.829C900.1 856.994 899.317 857.081 898.514 857.081C897.416 857.081 896.355 856.919 895.355 856.617C895.478 857.966 895.541 859.331 895.541 860.711C895.541 861.368 895.527 862.021 895.499 862.67C897.353 862.965 899.168 863.556 900.865 864.443C900.956 863.211 901.003 861.967 901.003 860.711C901.003 859.405 900.952 858.11 900.853 856.829Z"
          fill="#F83A40"
        />
        <path
          d="M886.14 896.258C884.416 895.559 882.782 894.58 881.313 893.32C878.977 895.489 876.409 897.409 873.648 899.04C874.691 900.548 875.363 902.33 875.537 904.256C879.423 902.066 882.988 899.37 886.14 896.258Z"
          fill="#F83A40"
        />
        <path
          d="M855.068 910.5C854.212 908.941 853.725 907.151 853.725 905.246C853.725 905.204 853.725 905.162 853.725 905.119C852.841 905.172 851.95 905.198 851.052 905.198C850.647 905.198 850.244 905.193 849.841 905.182C849.841 905.217 849.842 905.252 849.842 905.287C849.842 907.213 849.343 909.022 848.469 910.594C849.324 910.637 850.186 910.659 851.052 910.659C852.404 910.659 853.743 910.605 855.068 910.5Z"
          fill="#F83A40"
        />
        <path
          d="M827.987 905.026C828.033 903.067 828.594 901.235 829.541 899.661C826.999 898.254 824.609 896.606 822.402 894.746C820.661 895.832 818.747 896.6 816.758 897.025C820.099 900.181 823.875 902.881 827.987 905.026Z"
          fill="#F83A40"
        />
        <path
          d="M801.46 866.663C803.011 865.308 804.775 864.255 806.658 863.526C806.6 862.595 806.57 861.657 806.57 860.712C806.57 859.687 806.605 858.671 806.673 857.664C805.645 857.984 804.553 858.157 803.42 858.157C802.654 858.157 801.907 858.078 801.186 857.928C801.135 858.85 801.109 859.778 801.109 860.712C801.109 862.726 801.229 864.712 801.46 866.663Z"
          fill="#F83A40"
        />
        <path
          d="M807.117 836.94C808.885 837.575 810.441 838.654 811.653 840.041C812.552 838.331 813.56 836.686 814.665 835.116C812.895 834.513 811.33 833.469 810.099 832.115C809.018 833.662 808.021 835.272 807.117 836.94Z"
          fill="#F83A40"
        />
        <path
          d="M868.537 860.427C868.537 870.115 860.683 877.969 850.995 877.969C841.307 877.969 833.453 870.115 833.453 860.427C833.453 850.738 841.307 842.885 850.995 842.885C860.683 842.885 868.537 850.738 868.537 860.427Z"
          fill="#F83A40"
        />
        <g filter="url(#filter0_i_448_78)">
          <circle cx="668.818" cy="521.818" r="68.8184" fill="#351616" />
        </g>
        <circle
          cx="668.818"
          cy="521.818"
          r="68.1927"
          stroke="url(#paint20_linear_448_78)"
          strokeWidth="1.25124"
        />
        <circle
          cx="668.107"
          cy="523.867"
          r="32.0531"
          fill="url(#paint21_radial_448_78)"
          stroke="url(#paint22_linear_448_78)"
          strokeWidth="3.05268"
        />
        <g filter="url(#filter1_i_448_78)">
          <circle cx="194.818" cy="452.818" r="68.8184" fill="#351616" />
        </g>
        <circle
          cx="194.818"
          cy="452.818"
          r="68.1927"
          stroke="url(#paint23_linear_448_78)"
          strokeWidth="1.25124"
        />
        <circle
          cx="194.107"
          cy="454.867"
          r="32.0531"
          fill="url(#paint24_radial_448_78)"
          stroke="url(#paint25_linear_448_78)"
          strokeWidth="3.05268"
        />
        <path
          d="M249.5 500L520 656C528.5 637.167 558.4 590.2 610 553"
          stroke="#753333"
          strokeWidth="2"
        />
        <path
          d="M249.5 500L520 656C528.5 637.167 558.4 590.2 610 553"
          stroke="url(#paint26_linear_448_78)"
          strokeWidth="5"
        />
        <g filter="url(#filter2_i_448_78)">
          <circle cx="855.818" cy="86.8184" r="68.8184" fill="#351616" />
        </g>
        <circle
          cx="855.818"
          cy="86.8184"
          r="68.1927"
          stroke="url(#paint27_linear_448_78)"
          strokeWidth="1.25124"
        />
        <circle
          cx="855.107"
          cy="88.8675"
          r="32.0531"
          fill="url(#paint28_radial_448_78)"
          stroke="url(#paint29_linear_448_78)"
          strokeWidth="3.05268"
        />
        <g filter="url(#filter3_i_448_78)">
          <circle cx="1529.89" cy="463.887" r="79.8867" fill="#351616" />
        </g>
        <circle
          cx="1529.89"
          cy="463.887"
          r="79.1605"
          stroke="url(#paint30_linear_448_78)"
          strokeWidth="1.45249"
        />
        <circle
          cx="1529.06"
          cy="466.265"
          r="37.4539"
          fill="url(#paint31_radial_448_78)"
          stroke="url(#paint32_linear_448_78)"
          strokeWidth="3.05268"
        />
        <path
          d="M1463 506.5L1351 568.5C1335.33 537.333 1284.5 460 1206.5 400"
          stroke="#753333"
          strokeWidth="2"
        />
        <path
          d="M1463 506.5L1351 568.5C1335.33 537.333 1284.5 460 1206.5 400"
          stroke="url(#paint33_linear_448_78)"
          strokeWidth="5"
        />
        <g filter="url(#filter4_i_448_78)">
          <circle cx="1150" cy="358" r="70" fill="#351616" />
        </g>
        <circle
          cx="1150"
          cy="358"
          r="69.3636"
          stroke="url(#paint34_linear_448_78)"
          strokeWidth="1.27273"
        />
        <circle
          cx="1149.27"
          cy="360.084"
          r="32.6297"
          fill="url(#paint35_radial_448_78)"
          stroke="url(#paint36_linear_448_78)"
          strokeWidth="3.05268"
        />
        <defs>
          <filter
            id="filter0_i_448_78"
            x="600"
            y="453"
            width="137.637"
            height="142.642"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="5.00497" />
            <feGaussianBlur stdDeviation="2.50249" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.600756 0 0 0 0 0.600756 0 0 0 0 0.600756 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_448_78"
            />
          </filter>
          <filter
            id="filter1_i_448_78"
            x="126"
            y="384"
            width="137.637"
            height="142.642"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="5.00497" />
            <feGaussianBlur stdDeviation="2.50249" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.600756 0 0 0 0 0.600756 0 0 0 0 0.600756 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_448_78"
            />
          </filter>
          <filter
            id="filter2_i_448_78"
            x="787"
            y="18"
            width="137.637"
            height="142.642"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="5.00497" />
            <feGaussianBlur stdDeviation="2.50249" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.600756 0 0 0 0 0.600756 0 0 0 0 0.600756 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_448_78"
            />
          </filter>
          <filter
            id="filter3_i_448_78"
            x="1450"
            y="384"
            width="159.773"
            height="165.583"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="5.80994" />
            <feGaussianBlur stdDeviation="2.90497" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.600756 0 0 0 0 0.600756 0 0 0 0 0.600756 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_448_78"
            />
          </filter>
          <filter
            id="filter4_i_448_78"
            x="1080"
            y="288"
            width="140"
            height="145.091"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="5.09091" />
            <feGaussianBlur stdDeviation="2.54545" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.600756 0 0 0 0 0.600756 0 0 0 0 0.600756 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_448_78"
            />
          </filter>
          <radialGradient
            id="paint0_radial_448_78"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(852.5 852.5) rotate(90) scale(852.5)"
          >
            <stop stopColor="#4C1D1D" stopOpacity="0" />
            <stop offset="1" stopColor="#4A2020" stopOpacity="0.48" />
          </radialGradient>
          <radialGradient
            id="paint1_radial_448_78"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(852.5 852.5) rotate(90) scale(787.5)"
          >
            <stop stopColor="#4C1D1D" stopOpacity="0" />
            <stop offset="1" stopColor="#4A2020" stopOpacity="0.48" />
          </radialGradient>
          <radialGradient
            id="paint2_radial_448_78"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(852.5 852.5) rotate(90) scale(575.5)"
          >
            <stop stopColor="#4C1D1D" stopOpacity="0" />
            <stop offset="1" stopColor="#4A2020" stopOpacity="0.48" />
          </radialGradient>
          <radialGradient
            id="paint3_radial_448_78"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(852.5 852.5) rotate(90) scale(385.5)"
          >
            <stop stopColor="#4C1D1D" stopOpacity="0" />
            <stop offset="1" stopColor="#4A2020" stopOpacity="0.48" />
          </radialGradient>
          <radialGradient
            id="paint4_radial_448_78"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(852.5 852.5) rotate(90) scale(211.5)"
          >
            <stop stopColor="#4C1D1D" stopOpacity="0" />
            <stop offset="1" stopColor="#4A2020" stopOpacity="0.48" />
          </radialGradient>
          <radialGradient
            id="paint5_radial_448_78"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(871.392 893.964) rotate(-91.0925) scale(929.91)"
          >
            <stop stopColor="#5C2525" />
            <stop offset="1" stopColor="#040202" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="paint6_radial_448_78"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(854.878 862.982) rotate(179.647) scale(917.227 522.16)"
          >
            <stop stopColor="#FF8181" />
            <stop offset="1" stopColor="#8A2828" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="paint7_radial_448_78"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(849.777 862.629) rotate(-150.353) scale(917.227 522.16)"
          >
            <stop stopColor="#FF8181" />
            <stop offset="1" stopColor="#8A2828" stopOpacity="0" />
          </radialGradient>
          <motion.linearGradient
            id="paint8_linear_448_78"
            animate={shouldPlay ? {
              x1: [800, 0],
              x2: [600, 0],
              y1: [-50, 400],
              y2: [-50, 300],
            } : {}}
            transition={{
              duration: 2,
              delay: 0.5,
            }}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8A2828" stopOpacity="0" />
            <stop offset="0.37111" stopColor="#FF8181" />
            <stop offset="1" stopColor="#8A2828" stopOpacity="0" />
          </motion.linearGradient>
          <radialGradient
            id="paint9_radial_448_78"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(854.878 862.982) rotate(179.647) scale(917.227 522.16)"
          >
            <stop stopColor="#FF8181" />
            <stop offset="1" stopColor="#8A2828" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="paint10_radial_448_78"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(860.004 860.255) rotate(149.647) scale(917.227 522.16)"
          >
            <stop stopColor="#FF8181" />
            <stop offset="1" stopColor="#8A2828" stopOpacity="0" />
          </radialGradient>
          <motion.linearGradient
            id="paint11_linear_448_78"
            animate={shouldPlay ? {
              x1: [550, 0],
              x2: [750, 0],
              y1: [0, 400],
              y2: [0, 300],
            }: {}}
            transition={{
              duration: 2,
            }}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8A2828" stopOpacity="0" />
            <stop offset="0.37111" stopColor="#FF8181" />
            <stop offset="1" stopColor="#8A2828" stopOpacity="0" />
          </motion.linearGradient>
          <radialGradient
            id="paint12_radial_448_78"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(862.378 855.482) rotate(119.647) scale(917.227 522.16)"
          >
            <stop stopColor="#FF8181" />
            <stop offset="1" stopColor="#8A2828" stopOpacity="0" />
          </radialGradient>
          <motion.linearGradient
            id="paint13_linear_448_78"
            animate={shouldPlay ? {
              x1: [500, 0],
              x2: [750, 0],
              y1: [0, 460],
              y2: [0, 100],
            } : {}}
            transition={{
              duration: 2,
            }}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8A2828" stopOpacity="0" />
            <stop offset="0.220543" stopColor="#FF8181" />
            <stop offset="0.401239" stopColor="#8A2828" stopOpacity="0" />
          </motion.linearGradient>
          <radialGradient
            id="paint14_radial_448_78"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(862.731 850.38) rotate(89.6469) scale(917.227 522.16)"
          >
            <stop stopColor="#FF8181" />
            <stop offset="1" stopColor="#8A2828" stopOpacity="0" />
          </radialGradient>
          <motion.linearGradient
            id="paint15_linear_448_78"
            gradientUnits="userSpaceOnUse"
            animate={shouldPlay ? {
              x1: [500, 0],
              x2: [700, 0],
              y1: [700, 200],
              y2: [600, 0],
            }: {}}
            transition={{
              duration: 2,
            }}
          >
            <stop stopColor="#8A2828" stopOpacity="0" />
            <stop offset="0.37111" stopColor="#FF8181" />
            <stop offset="1" stopColor="#8A2828" stopOpacity="0" />
          </motion.linearGradient>
          <motion.linearGradient
            id="paint16_linear_448_78"
            x1={900}
            x2={1000}
            animate={shouldPlay ? {
              x1: [0, 900],
              x2: [100, 1000],
              y1: [0, 460],
              y2: [40, 600],
            }: {}}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 2.5,
            }}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#793D3D" stopOpacity="0" />
            <stop offset="0.402991" stopColor="#C67575" />
            <stop offset="1" stopColor="#793D3D" stopOpacity="0" />
          </motion.linearGradient>
          <motion.linearGradient
            id="paint17_linear_448_78"
            animate={shouldPlay ? {
              x1: [0, 150],
              x2: [-40, 20],
              y1: [-140, -100],
              y2: [340, -50],
            }: {}}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 3,
            }}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0815993" stopColor="#793D3D" stopOpacity="0" />
            <stop offset="0.312003" stopColor="#EA8E8E" />
            <stop offset="0.582975" stopColor="#793D3D" stopOpacity="0" />
          </motion.linearGradient>
          <radialGradient
            id="paint18_radial_448_78"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(787.004 768.255) rotate(-120.353) scale(917.227 522.16)"
          >
            <stop stopColor="#FF8181" />
            <stop offset="1" stopColor="#8A2828" stopOpacity="0" />
          </radialGradient>
          <motion.linearGradient
            id="paint19_linear_448_78"
            animate={shouldPlay ? {
              x1: [550, 0],
              x2: [750, 0],
              y1: [552 * 2, 552],
              y2: [700, 552 / 2],
            }: {}}
            transition={{
              duration: 2,
            }}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8A2828" stopOpacity="0" />
            <stop offset="0.37111" stopColor="#FF8181" />
            <stop offset="1" stopColor="#8A2828" stopOpacity="0" />
          </motion.linearGradient>
          <linearGradient
            id="paint20_linear_448_78"
            x1="675.7"
            y1="590.637"
            x2="673.823"
            y2="392.94"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A6A6A6" />
            <stop offset="1" stopColor="#545454" stopOpacity="0" />
          </linearGradient>
          <radialGradient
            id="paint21_radial_448_78"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(668.107 523.867) rotate(90) scale(33.5795)"
          >
            <stop offset="0.469173" stopColor="#FF5D5D" stopOpacity="0" />
            <stop offset="1" stopColor="#FA8484" stopOpacity="0.18" />
          </radialGradient>
          <motion.linearGradient
            id="paint22_linear_448_78"
            x1="649.791"
            y1="493.34"
            x2="668.107"
            y2="557.446"
            gradientUnits="userSpaceOnUse"
          >
            <motion.stop
              animate={shouldPlay ? {
                stopColor: ["#CDCDCD", "#FF9F9F"],
              }: {}}
              transition={{
                duration: 0.5,
                delay: 1.2,
              }}
              stopColor="#CDCDCD"
            />
            <motion.stop
              offset="1"
              animate={shouldPlay ? {
                stopColor: ["#C4C4C4", "#FF0000"],
              }: {}}
              transition={{
                duration: 0.5,
                delay: 1.2,
              }}
              stopColor="#C4C4C4"
            />
          </motion.linearGradient>
          <linearGradient
            id="paint23_linear_448_78"
            x1="201.7"
            y1="521.637"
            x2="199.823"
            y2="323.94"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A6A6A6" />
            <stop offset="1" stopColor="#545454" stopOpacity="0" />
          </linearGradient>
          <radialGradient
            id="paint24_radial_448_78"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(194.107 454.867) rotate(90) scale(33.5795)"
          >
            <stop offset="0.469173" stopColor="#FF5D5D" stopOpacity="0" />
            <stop offset="1" stopColor="#FA8484" stopOpacity="0.18" />
          </radialGradient>
          <motion.linearGradient
            id="paint25_linear_448_78"
            x1="175.791"
            y1="424.34"
            x2="194.107"
            y2="488.446"
            gradientUnits="userSpaceOnUse"
          >
            <motion.stop
              animate={shouldPlay ? {
                stopColor: ["#CDCDCD", "#FF9F9F"],
              }: {}}
              transition={{
                duration: 0.5,
                delay: 1,
              }}
              stopColor="#CDCDCD"
            />
            <motion.stop
              offset="1"
              animate={shouldPlay ? {
                stopColor: ["#C4C4C4", "#FF0000"],
              }: {}}
              transition={{
                duration: 0.5,
                delay: 1,
              }}
              stopColor="#C4C4C4"
            />
          </motion.linearGradient>
          <motion.linearGradient
            id="paint26_linear_448_78"
            animate={shouldPlay ? {
              x1: [270, 0],
              x2: [380, 200],
              y1: [20, 100],
              y2: [50, -200],
            }: {}}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: 3,
            }}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#793D3D" stopOpacity="0" />
            <stop offset="0.450406" stopColor="#DC7B7B" />
            <stop offset="1" stopColor="#793D3D" stopOpacity="0" />
          </motion.linearGradient>
          <linearGradient
            id="paint27_linear_448_78"
            x1="862.7"
            y1="155.637"
            x2="860.823"
            y2="-42.0597"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A6A6A6" />
            <stop offset="1" stopColor="#545454" stopOpacity="0" />
          </linearGradient>
          <radialGradient
            id="paint28_radial_448_78"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(855.107 88.8675) rotate(90) scale(33.5795)"
          >
            <stop offset="0.469173" stopColor="#FF5D5D" stopOpacity="0" />
            <stop offset="1" stopColor="#FA8484" stopOpacity="0.18" />
          </radialGradient>
          <linearGradient
            id="paint29_linear_448_78"
            x1="836.791"
            y1="58.3408"
            x2="855.107"
            y2="122.447"
            gradientUnits="userSpaceOnUse"
          >
            <motion.stop
              animate={shouldPlay ? {
                stopColor: ["#CDCDCD", "#FF9F9F"],
              }: {}}
              transition={{
                duration: 0.5,
                delay: 2,
              }}
              stopColor="#CDCDCD"
            />
            <motion.stop
              offset="1"
              animate={shouldPlay ? {
                stopColor: ["#C4C4C4", "#FF0000"],
              }: {}}
              transition={{
                duration: 0.5,
                delay: 2,
              }}
              stopColor="#C4C4C4"
            />
          </linearGradient>
          <linearGradient
            id="paint30_linear_448_78"
            x1="1537.88"
            y1="543.773"
            x2="1535.7"
            y2="314.281"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A6A6A6" />
            <stop offset="1" stopColor="#545454" stopOpacity="0" />
          </linearGradient>
          <radialGradient
            id="paint31_radial_448_78"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1529.06 466.265) rotate(90) scale(38.9802)"
          >
            <stop offset="0.469173" stopColor="#FF5D5D" stopOpacity="0" />
            <stop offset="1" stopColor="#FA8484" stopOpacity="0.18" />
          </radialGradient>
          <motion.linearGradient
            id="paint32_linear_448_78"
            x1="1507.8"
            y1="430.829"
            x2="1529.06"
            y2="505.246"
            gradientUnits="userSpaceOnUse"
          >
            <motion.stop
              animate={shouldPlay ? {
                stopColor: ["#CDCDCD", "#FF9F9F"],
              }: {}}
              transition={{
                duration: 0.5,
                delay: 2,
              }}
              stopColor="#CDCDCD"
            />
            <motion.stop
              offset="1"
              animate={shouldPlay ? {
                stopColor: ["#C4C4C4", "#FF0000"],
              }: {}}
              transition={{
                duration: 0.5,
                delay: 2,
              }}
              stopColor="#C4C4C4"
            />
          </motion.linearGradient>
          <motion.linearGradient
            id="paint33_linear_448_78"
            animate={shouldPlay ? {
              x1: [0, 80],
              x2: [-10, 125],
              y1: [180, 185],
              y2: [-50, 100],
            }: {}}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              delay: 2,
            }}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#793D3D" stopOpacity="0" />
            <stop offset="0.450406" stopColor="#DC7B7B" />
            <stop offset="1" stopColor="#793D3D" stopOpacity="0" />
          </motion.linearGradient>
          <linearGradient
            id="paint34_linear_448_78"
            x1="1157"
            y1="428"
            x2="1155.09"
            y2="226.909"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A6A6A6" />
            <stop offset="1" stopColor="#545454" stopOpacity="0" />
          </linearGradient>
          <radialGradient
            id="paint35_radial_448_78"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1149.27 360.084) rotate(90) scale(34.156)"
          >
            <stop offset="0.469173" stopColor="#FF5D5D" stopOpacity="0" />
            <stop offset="1" stopColor="#FA8484" stopOpacity="0.18" />
          </radialGradient>
          <motion.linearGradient
            id="paint36_linear_448_78"
            x1="1130.64"
            y1="329.033"
            x2="1149.27"
            y2="394.24"
            gradientUnits="userSpaceOnUse"
          >
            <motion.stop
              animate={shouldPlay ? {
                stopColor: ["#CDCDCD", "#FF9F9F"],
              }: {}}
              transition={{
                duration: 0.5,
                delay: 2,
              }}
              stopColor="#CDCDCD"
            />
            <motion.stop
              offset="1"
              animate={shouldPlay ? {
                stopColor: ["#C4C4C4", "#FF0000"],
              }: {}}
              transition={{
                duration: 0.5,
                delay: 2,
              }}
              stopColor="#C4C4C4"
            />
          </motion.linearGradient>
          <clipPath id="clip0_448_78">
            <rect width="1705" height="857" fill="white" />
          </clipPath>
          <clipPath id="clip1_448_78">
            <rect width="1705" height="857" fill="white" />
          </clipPath>
        </defs>
      </motion.svg>
    </div>
  );
};

export default HeroAsset;
