import { defineStore } from "pinia";
import type moduleListType from "@/types/moduleListType";

export const useModuleListData = defineStore('moduleListData', {
  state: () => ({
    data: <moduleListType[]>[]
  })
})