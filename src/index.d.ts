declare const require: (path: string) => any
declare module "*.json" {
    const value: any;
    export default value;
}
declare module "rc-progress" {
  const Circle: any;
}
