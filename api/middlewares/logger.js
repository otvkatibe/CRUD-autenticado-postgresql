const logAction = (message, userId, endpoint) => {
    console.log(`[AÇÃO] ${new Date().toISOString()} - Usuário: ${userId} - Endpoint: ${endpoint} - ${message}`);
};

const logError = (error, userId, endpoint) => {
    console.error(`[ERRO] ${new Date().toISOString()} - Usuário: ${userId} - Endpoint: ${endpoint} - Erro: ${error.message}`);
};

export { logAction, logError };