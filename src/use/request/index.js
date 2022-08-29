import { ref } from 'vue'

export default requestSource => {
  return {
    request: requestSource,

    useData( target ) {
      this.data = target || ref( null )
      this.dataGetter = response => response
      const request = this.request
      this.request = async () => {
        const response = await request()
        this.data.value = this.dataGetter( response )
        return response
      }
      return this
    },

    useLoading( target ) {
      this.loading = target || ref( false )
      const request = this.request
      this.request = async () => {
        this.loading.value = true
        let response
        try {
          response = await request()
        }
        finally {
          this.loading.value = false
        }
        return response
      }
      return this
    },

    useReady( target ) {
      this.ready = target || ref( false )
      const request = this.request
      this.request = async () => {
        const response = await request()
        this.ready.value = true
        return response
      }
      return this
    },

    useError( target ) {
      this.error = target || ref( null )
      this.errorGetter = error => error
      const request = this.request
      this.request = async () => {
        this.error.value = null
        let response
        try {
          response = await request()
        }
        catch( error ) {
          this.error.value = this.errorGetter( error )
          throw error
        }
        return response
      }
      return this
    },

    useDataGetter( getter ) {
      this.dataGetter = getter
      return this
    },

    useErrorGetter( getter ) {
      this.errorGetter = getter
      return this
    },

    useSoftMode( target ) {
      this.requestSoft = async () => {
        if ( this.ready.value ) return
        const response = await this.request()
        return response
      }
      return this
    }
  }
}