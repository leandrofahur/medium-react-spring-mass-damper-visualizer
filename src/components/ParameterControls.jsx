import React from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

const ParameterControls = ({ params, updateParam }) => {
  const controls = [
    { key: "mass", label: "Mass (kg)", min: 0.1, max: 10, step: 0.1 },
    {
      key: "springConstant",
      label: "Spring Constant (N/m)",
      min: 1,
      max: 100,
      step: 1,
    },
    {
      key: "dampingCoefficient",
      label: "Damping Coefficient (Ns/m)",
      min: 0,
      max: 5,
      step: 0.1,
    },
    {
      key: "initialDisplacement",
      label: "Initial Displacement (m)",
      min: -5,
      max: 5,
      step: 0.1,
    },
    {
      key: "initialVelocity",
      label: "Initial Velocity (m/s)",
      min: -5,
      max: 5,
      step: 0.1,
    },
    {
      key: "simulationTime",
      label: "Simulation Time (s)",
      min: 1,
      max: 30,
      step: 1,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {controls.map(({ key, label, min, max, step }) => (
        <div key={key} className="space-y-2">
          <Label htmlFor={key}>{label}</Label>
          <Slider
            id={key}
            min={min}
            max={max}
            step={step}
            value={[params[key]]}
            onValueChange={(value) => updateParam(key, value[0])}
          />
          <p className="text-sm text-muted-foreground">
            {params[key].toFixed(2)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ParameterControls;
