interface IGroupByKey {
  objects: {
    [key: string]: string;
  }[];
  key: string;
}

export default function groupByKey({ objects, key }: IGroupByKey) {
  return objects.reduce((acc, cur) => {
    acc[cur[key]] = [...(acc[cur[key]] || []), cur];
    return acc;
  }, []);
}
