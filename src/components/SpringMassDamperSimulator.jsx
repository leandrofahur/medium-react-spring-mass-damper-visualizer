import React, { useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useSpringMassDamperSimulation from "@/hooks/useSpringMassDamperSimulation";
import ParameterControls from "./ParameterControls";
import SimulationGraph from "./SimulationGraph";

const initialParams = {
  mass: 1,
  springConstant: 10,
  dampingCoefficient: 0.5,
  initialDisplacement: 1,
  initialVelocity: 0,
  simulationTime: 10,
  timeStep: 0.1,
};

const SpringMassDamperSimulator = () => {
  const { params, data, isRunning, updateParam, toggleSimulation } =
    useSpringMassDamperSimulation(initialParams);

  const memoizedControls = useMemo(
    () => <ParameterControls params={params} updateParam={updateParam} />,
    [params, updateParam]
  );

  const memoizedGraph = useMemo(() => <SimulationGraph data={data} />, [data]);

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Spring-Mass-Damper System Simulator</CardTitle>
        <CardDescription>
          Adjust parameters and observe the system's behavior
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {memoizedControls}
        {memoizedGraph}
      </CardContent>
      <CardFooter>
        <Button onClick={toggleSimulation} className="w-full">
          {isRunning ? "Stop Simulation" : "Start Simulation"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SpringMassDamperSimulator;
