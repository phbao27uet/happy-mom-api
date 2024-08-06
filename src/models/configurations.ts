export interface EnvironmentVariables {
  port: number;
}

export default (): EnvironmentVariables => ({
  port: process.env.PORT as unknown as number,
});
