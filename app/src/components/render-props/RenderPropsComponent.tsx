import TemperatureConverter, {
    Kelvin,
    Fahrenheit,
  } from './TemperatureConverter';
  
  export default function RenderPropsComponent() {
    return (
      <TemperatureConverter
        renderKelvin={({ value }: {value: number}) => <Kelvin value={value} />}
        renderFahrenheit={({ value }: {value: number}) => <Fahrenheit value={value} />}
      />
    );
  }
  