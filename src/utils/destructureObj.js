const destructureObjs = (objects) => Object.keys(objects).map((key) => objects[key]).flat();

export default destructureObjs;
