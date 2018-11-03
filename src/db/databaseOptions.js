const databaseOptions = (schemas, version) => {
  const config = {
    path: 'AutismApp.realm',
    schema: [...schemas],
    schemaVersion: version,
  }

  return config;
}
export default databaseOptions;
