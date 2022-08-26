import { CardDetails, Loader } from 'components'
import { useProduct } from 'context/productContext';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const CourseDetails = () => {
  const { courseTitle } = useParams();
  const { getAProduct, state:{product, loading} } = useProduct()
  useEffect(() => {
    getAProduct(courseTitle)
  }, [])
  return (<>
    {loading ? (
      <Loader />
    ) : (
      <CardDetails
        product={product}
      />
    )}
  </>
  )
}
