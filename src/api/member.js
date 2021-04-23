import client from './mockClient'

const getMemberAPI = () => client.get("/members").then((res) => res.data)


export {getMemberAPI}