import { flags } from '@/utils';

export default {
  computed: {
    isLoading() {
      return flags.isLoading;
    }
  }
}