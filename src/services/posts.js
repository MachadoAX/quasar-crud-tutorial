import useApi from 'src/composables/UseApi'

export default function postsServive () {
  const { list, post, update, remove , getById } = useApi('posts')

  return {
    list,
    post,
    update,
    remove,
    getById
  }
}
