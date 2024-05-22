type LocationResponse = {
  ip_address: string 
  city: string | null
  city_geoname_id: string | null
  region: string | null
  region_iso_code: string | null
  region_geoname_id: string | null
  postal_code: string | null
  country: string | null
  country_code: string | null
  country_geoname_id: string | null
  country_is_eu: string | null
  continent: string | null
  continent_code: string | null
  continent_geoname_id: string | null
  longitude: string | null
  latitude: string | null
  security: {
    is_vpn: boolean
  }
}
