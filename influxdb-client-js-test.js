// Install via NPM
// npm i @influxdata/influxdb-client

// Initialize the Client
const {InfluxDB} = require('@influxdata/influxdb-client')

// You can generate a Token from the "Tokens Tab" in the UI
const token = 'SaFFVAPgFfA0r8t9hbF_qWse4pJyGsmSnKMwnJYel2avib7OYz7l11mioaA8t9RWx2ZFBl9tgUlVpmgsCEPYSw=='
const org = 'giant3380@gmail.com'
const bucket = 'SolarEnergyCheck'

const client = new InfluxDB({url: 'https://us-west-2-1.aws.cloud2.influxdata.com', token: token})

// Write Data
const {Point} = require('@influxdata/influxdb-client')

const writeApi = client.getWriteApi(org, bucket)
writeApi.useDefaultTags({host: 'host1'})

const point = new Point('hepi')
  .floatField('Temperature', 25)
  .floatField('Humidity', 26)
  .floatField('Radiation', 27)
  .floatField('Gradient', 28)
writeApi.writePoint(point)
console.log(` ${point}`)
writeApi
    .close()
    .then(() => {
        console.log('W FINISHED')
    })
    .catch(e => {
        console.error(e)
        console.log('W Finished ERROR')
    })

//Execute a Flux query
const queryApi = client.getQueryApi(org)

const query = `from(bucket: "${bucket}") |> range(start: -1h)  |> filter(fn: (r) => r._measurement == "mem")`
queryApi.queryRows(query, {
    next(row, tableMeta) {
    const o = tableMeta.toObject(row)
    console.log(
        `${o._time} ${o._measurement} in '${o.location}' (${o.example}): ${o._field}=${o._value}`
    )
    },
    error(error) {
    console.error(error)
    console.log('Q Finished ERROR')
    },
    complete() {
    console.log('Q Finished SUCCESS')
    },
})

//run: node .\influxdb-client-js-test.js