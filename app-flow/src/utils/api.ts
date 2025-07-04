const API_BASE_URL='http://localhost:5000/api/v1'

class ApiService{
    private getAuthHeaders(){
        const token=localStorage.getItem('token')
        return {
            'Content-Type':'application/json',
            ...(token && {Authorization: `Bearer ${token}`})
        }
    }

    
}