const authService = {
    setToken(token: string): void {
        localStorage.setItem('token', token='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNThjY2JjYmFhZmIzMzExMmU0NzI0MWZlZjc5OTkzNSIsInN1YiI6IjY1ZGIwNTEwZTljMGRjMDE4NmMxYmZjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jr00Y_vZ0aw7RFbHgF2LXdcG0lPDufLGiL8myNBFG08')
    },

    getToken(): string|null {
        return localStorage.getItem('token')
    }
}

export {authService}