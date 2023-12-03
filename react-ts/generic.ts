interface Anyone<T> {
  name: string;
  age: T
}

const josh: Anyone<number> = {
  name: 'josh',
  age: 100
}