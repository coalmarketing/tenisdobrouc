"use client"; // Indicate that this is a Client Component

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'; // Use usePathname instead of useRouter
import { useColor } from './../../contexts/ColorContext';

// Define the component as a Function Component
const Kurt: React.FC = () => {
  const pathname = usePathname(); // Get the current pathname
  const colorMap = useColor(); // Get the color map from context
  const [currentHex, setCurrentHex] = useState<string>('#EAA224'); // Default yellow hex

  useEffect(() => {
    // Update the current hex color based on the pathname after component mounts
    const hexColor = colorMap[pathname as keyof typeof colorMap]?.hex || '#EAA224';
    setCurrentHex(hexColor);
  }, [pathname, colorMap]); // Update when pathname or colorMap changes

  return (
    <div className='absolute -z-10 left-[-16rem] top-[-3rem] w-[calc(100%+256px)] overflow-hidden'>
      <svg xmlns="http://www.w3.org/2000/svg" width="2599" height="2600" viewBox="0 0 2942 2941" fill="none">
        <path
          d="M1921.96 1955.09L1998.92 2033.08L2028.2 2004.19L1951.07 1926.04L2941.72 936.535L2006.72 0.450301L1021.75 984.285L948.013 909.561L918.734 938.45L992.661 1013.37L0.379243 2004.5L935.349 2940.56L1921.96 1955.09ZM1473.26 1500.37L1780.71 1811.93L1275.98 2316.07L966.577 2000.36L1473.26 1500.37ZM1132.26 1154.85L1444.37 1471.13L937.784 1971.02L629.786 1656.74L1132.26 1154.85ZM140.873 2086.96L58.5155 2004.5L1021.52 1042.61L1103.38 1125.57L140.873 2086.96ZM482.415 2428.89L169.941 2116.06L600.685 1685.81L1246.88 2345.17L822.342 2769.22L511.483 2458L540.584 2428.93L511.516 2399.83L482.415 2428.89ZM1809.61 1841.22L1893.07 1925.81L935.382 2882.39L851.41 2798.32L1809.61 1841.22ZM2459.64 512.094L2770.5 823.314L2343.04 1250.28L1696.84 590.924L2118.1 170.157L2430.57 482.993L2406.32 507.216L2435.39 536.317L2459.64 512.094ZM1132.48 1096.5L1050.62 1013.55L2006.67 58.6026L2089.03 141.056L1132.48 1096.5ZM1473.63 1442.22L1161.37 1125.78L1667.72 620.007L1981.94 940.633L1473.64 1442.24L1473.63 1442.22ZM1809.82 1782.88L1502.53 1471.48L2010.73 969.976L2313.92 1279.33L1809.81 1782.86L1809.82 1782.88ZM1922.17 1896.74L1838.7 1812.17L2799.57 852.415L2883.54 936.485L1922.17 1896.74Z"
          fill={currentHex}
          fillOpacity="0.15"
        />
      </svg>
    </div>
  );
};

export default Kurt;
