
const url = 'http://localhost:3000/'
interface HandleApiCallProps {
    route: string,
    method: string,
    body?: {},
    content_type?: string
}

async function HandleApiCall({ route, method, body, content_type='application/json' }: HandleApiCallProps)  {
    try {
        let response; 
  
        if (method === 'POST') {
        
            response = await fetch(`${url}${route}`, {
                method: method, 
                headers : {
                    'Content-Type': content_type
                }, 
                body: JSON.stringify(body), 
                credentials: 'include',
            })
        } else {
            response = await fetch(`${url}${route}`, {
                method: method,
                credentials: 'include'
            })
        }
    
        return await response.json();
    }
    catch (err) {
        console.error(err);
        return {}
    }
}

export default HandleApiCall; 