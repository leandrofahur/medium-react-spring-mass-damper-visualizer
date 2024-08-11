import { useState, useCallback, useEffect } from "react";

const useSpringMassDamperSimulation = (initialParams) => {
  const [params, setParams] = useState(initialParams);
  const [data, setData] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  const simulateSystem = useCallback(() => {
    let t = 0;
    let x = params.initialDisplacement;
    let v = params.initialVelocity;
    const newData = [];

    while (t <= params.simulationTime) {
      newData.push({ time: t, displacement: x });

      const acceleration =
        (-params.springConstant * x - params.dampingCoefficient * v) /
        params.mass;
      v += acceleration * params.timeStep;
      x += v * params.timeStep;
      t += params.timeStep;
    }

    setData(newData);
  }, [params]);

  useEffect(() => {
    if (isRunning) {
      simulateSystem();
    }
  }, [isRunning, simulateSystem]);

  const updateParam = useCallback((key, value) => {
    setParams((prev) => ({ ...prev, [key]: value }));
  }, []);

  const toggleSimulation = useCallback(() => {
    setIsRunning((prev) => !prev);
  }, []);

  return {
    params,
    data,
    isRunning,
    updateParam,
    toggleSimulation,
  };
};

export default useSpringMassDamperSimulation;
