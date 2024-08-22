"use client";
import { TrendingUp } from "lucide-react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { RepeatedPasswordChartProps } from "./RepeatedPasswordChart.types";

export function RepeatedPasswordChart(props: RepeatedPasswordChartProps) {
  const { repeated, unique } = props;

  const totalPassword = unique + repeated;

  const chartData = [{ month: "", unique: unique, repeated: repeated }];

  const chartConfig = {
    unique: {
      label: "Unicas",
      color: "hsl(var(--chart-3))",
    },
    repeated: {
      label: "Repetidas",
      color: "hsl(var(--chart-4))",
    },
  } satisfies ChartConfig;

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Contraseñas repetidas vs unicas</CardTitle>
        <CardDescription>Revisa tu contraseña repetida</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto w-full max-w-[250px] aspect-square"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="font-bold text-2xl fill-foreground"
                        >
                          {totalPassword.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          Contraseñas
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="unique"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-unique)"
              className="stroke-2 stroke-transparent"
            />
            <RadialBar
              dataKey="repeated"
              fill="var(--color-repeated)"
              stackId="a"
              cornerRadius={5}
              className="stroke-2 stroke-transparent"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Intenta no tener la misma contraseña.
        </div>
        <div className="text-muted-foreground leading-none">
            Total de contraseñas creadas
        </div>
      </CardFooter>
    </Card>
  );
}
