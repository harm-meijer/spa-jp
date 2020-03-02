import { modifyQuery } from '../../common/shared';

/* eslint-disable no-prototype-builtins */
export default {
  props: ['facets'],
  data: () => ({
  }),
  computed: {
  },
  methods: {
    pushRouter(query) {
      this.$router.push({
        ...this.$route,
        query,
      });
    },
    filterChange(e, name) {
      const query = modifyQuery(
        name,
        e.target.value,
        this.$route.query,
        e.target.checked,
      );
      this.pushRouter(query);
    },
    clearFacet(name) {
      this.pushRouter([]
        .concat(this.$route.query[name])
        .filter(v => v !== undefined)
        .reduce(
          (result, val) => modifyQuery(
            name,
            val,
            result,
            false,
          ), this.$route.query,
        ));
    },
    isChecked(name, value) {
      return Array.isArray(this.$route.query[name])
        ? this.$route.query[name].includes(value)
        : this.$route.query[name] === value;
    },
  },
};
