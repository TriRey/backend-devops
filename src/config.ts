export const configuration = {
    username: /*process.env.USERNAME ||*/ 'Sebastian Triviño',
    apikey: /*process.env.APIKEY ||*/ 'default-key',
    port: process.env.PORT || 3001,
    jwtSecretKey: process.env.JWT_SECRET_KEY || 'default-secret-key',
}
