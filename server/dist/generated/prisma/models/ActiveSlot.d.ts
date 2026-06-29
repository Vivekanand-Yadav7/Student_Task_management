import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model ActiveSlot
 *
 */
export type ActiveSlotModel = runtime.Types.Result.DefaultSelection<Prisma.$ActiveSlotPayload>;
export type AggregateActiveSlot = {
    _count: ActiveSlotCountAggregateOutputType | null;
    _min: ActiveSlotMinAggregateOutputType | null;
    _max: ActiveSlotMaxAggregateOutputType | null;
};
export type ActiveSlotMinAggregateOutputType = {
    id: string | null;
    start_time: string | null;
    end_time: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    userId: string | null;
};
export type ActiveSlotMaxAggregateOutputType = {
    id: string | null;
    start_time: string | null;
    end_time: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    userId: string | null;
};
export type ActiveSlotCountAggregateOutputType = {
    id: number;
    start_time: number;
    end_time: number;
    createdAt: number;
    updatedAt: number;
    userId: number;
    _all: number;
};
export type ActiveSlotMinAggregateInputType = {
    id?: true;
    start_time?: true;
    end_time?: true;
    createdAt?: true;
    updatedAt?: true;
    userId?: true;
};
export type ActiveSlotMaxAggregateInputType = {
    id?: true;
    start_time?: true;
    end_time?: true;
    createdAt?: true;
    updatedAt?: true;
    userId?: true;
};
export type ActiveSlotCountAggregateInputType = {
    id?: true;
    start_time?: true;
    end_time?: true;
    createdAt?: true;
    updatedAt?: true;
    userId?: true;
    _all?: true;
};
export type ActiveSlotAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ActiveSlot to aggregate.
     */
    where?: Prisma.ActiveSlotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ActiveSlots to fetch.
     */
    orderBy?: Prisma.ActiveSlotOrderByWithRelationInput | Prisma.ActiveSlotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ActiveSlotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ActiveSlots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ActiveSlots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ActiveSlots
    **/
    _count?: true | ActiveSlotCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ActiveSlotMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ActiveSlotMaxAggregateInputType;
};
export type GetActiveSlotAggregateType<T extends ActiveSlotAggregateArgs> = {
    [P in keyof T & keyof AggregateActiveSlot]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateActiveSlot[P]> : Prisma.GetScalarType<T[P], AggregateActiveSlot[P]>;
};
export type ActiveSlotGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActiveSlotWhereInput;
    orderBy?: Prisma.ActiveSlotOrderByWithAggregationInput | Prisma.ActiveSlotOrderByWithAggregationInput[];
    by: Prisma.ActiveSlotScalarFieldEnum[] | Prisma.ActiveSlotScalarFieldEnum;
    having?: Prisma.ActiveSlotScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ActiveSlotCountAggregateInputType | true;
    _min?: ActiveSlotMinAggregateInputType;
    _max?: ActiveSlotMaxAggregateInputType;
};
export type ActiveSlotGroupByOutputType = {
    id: string;
    start_time: string;
    end_time: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    _count: ActiveSlotCountAggregateOutputType | null;
    _min: ActiveSlotMinAggregateOutputType | null;
    _max: ActiveSlotMaxAggregateOutputType | null;
};
export type GetActiveSlotGroupByPayload<T extends ActiveSlotGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ActiveSlotGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ActiveSlotGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ActiveSlotGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ActiveSlotGroupByOutputType[P]>;
}>>;
export type ActiveSlotWhereInput = {
    AND?: Prisma.ActiveSlotWhereInput | Prisma.ActiveSlotWhereInput[];
    OR?: Prisma.ActiveSlotWhereInput[];
    NOT?: Prisma.ActiveSlotWhereInput | Prisma.ActiveSlotWhereInput[];
    id?: Prisma.StringFilter<"ActiveSlot"> | string;
    start_time?: Prisma.StringFilter<"ActiveSlot"> | string;
    end_time?: Prisma.StringFilter<"ActiveSlot"> | string;
    createdAt?: Prisma.DateTimeFilter<"ActiveSlot"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ActiveSlot"> | Date | string;
    userId?: Prisma.StringFilter<"ActiveSlot"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type ActiveSlotOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type ActiveSlotWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    AND?: Prisma.ActiveSlotWhereInput | Prisma.ActiveSlotWhereInput[];
    OR?: Prisma.ActiveSlotWhereInput[];
    NOT?: Prisma.ActiveSlotWhereInput | Prisma.ActiveSlotWhereInput[];
    start_time?: Prisma.StringFilter<"ActiveSlot"> | string;
    end_time?: Prisma.StringFilter<"ActiveSlot"> | string;
    createdAt?: Prisma.DateTimeFilter<"ActiveSlot"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ActiveSlot"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "userId">;
export type ActiveSlotOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    _count?: Prisma.ActiveSlotCountOrderByAggregateInput;
    _max?: Prisma.ActiveSlotMaxOrderByAggregateInput;
    _min?: Prisma.ActiveSlotMinOrderByAggregateInput;
};
export type ActiveSlotScalarWhereWithAggregatesInput = {
    AND?: Prisma.ActiveSlotScalarWhereWithAggregatesInput | Prisma.ActiveSlotScalarWhereWithAggregatesInput[];
    OR?: Prisma.ActiveSlotScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ActiveSlotScalarWhereWithAggregatesInput | Prisma.ActiveSlotScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ActiveSlot"> | string;
    start_time?: Prisma.StringWithAggregatesFilter<"ActiveSlot"> | string;
    end_time?: Prisma.StringWithAggregatesFilter<"ActiveSlot"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ActiveSlot"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ActiveSlot"> | Date | string;
    userId?: Prisma.StringWithAggregatesFilter<"ActiveSlot"> | string;
};
export type ActiveSlotCreateInput = {
    id?: string;
    start_time: string;
    end_time: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutActiveSlotInput;
};
export type ActiveSlotUncheckedCreateInput = {
    id?: string;
    start_time: string;
    end_time: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId: string;
};
export type ActiveSlotUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    start_time?: Prisma.StringFieldUpdateOperationsInput | string;
    end_time?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutActiveSlotNestedInput;
};
export type ActiveSlotUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    start_time?: Prisma.StringFieldUpdateOperationsInput | string;
    end_time?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ActiveSlotCreateManyInput = {
    id?: string;
    start_time: string;
    end_time: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId: string;
};
export type ActiveSlotUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    start_time?: Prisma.StringFieldUpdateOperationsInput | string;
    end_time?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActiveSlotUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    start_time?: Prisma.StringFieldUpdateOperationsInput | string;
    end_time?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ActiveSlotNullableScalarRelationFilter = {
    is?: Prisma.ActiveSlotWhereInput | null;
    isNot?: Prisma.ActiveSlotWhereInput | null;
};
export type ActiveSlotCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type ActiveSlotMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type ActiveSlotMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type ActiveSlotCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ActiveSlotCreateWithoutUserInput, Prisma.ActiveSlotUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ActiveSlotCreateOrConnectWithoutUserInput;
    connect?: Prisma.ActiveSlotWhereUniqueInput;
};
export type ActiveSlotUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ActiveSlotCreateWithoutUserInput, Prisma.ActiveSlotUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ActiveSlotCreateOrConnectWithoutUserInput;
    connect?: Prisma.ActiveSlotWhereUniqueInput;
};
export type ActiveSlotUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ActiveSlotCreateWithoutUserInput, Prisma.ActiveSlotUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ActiveSlotCreateOrConnectWithoutUserInput;
    upsert?: Prisma.ActiveSlotUpsertWithoutUserInput;
    disconnect?: Prisma.ActiveSlotWhereInput | boolean;
    delete?: Prisma.ActiveSlotWhereInput | boolean;
    connect?: Prisma.ActiveSlotWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ActiveSlotUpdateToOneWithWhereWithoutUserInput, Prisma.ActiveSlotUpdateWithoutUserInput>, Prisma.ActiveSlotUncheckedUpdateWithoutUserInput>;
};
export type ActiveSlotUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ActiveSlotCreateWithoutUserInput, Prisma.ActiveSlotUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ActiveSlotCreateOrConnectWithoutUserInput;
    upsert?: Prisma.ActiveSlotUpsertWithoutUserInput;
    disconnect?: Prisma.ActiveSlotWhereInput | boolean;
    delete?: Prisma.ActiveSlotWhereInput | boolean;
    connect?: Prisma.ActiveSlotWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ActiveSlotUpdateToOneWithWhereWithoutUserInput, Prisma.ActiveSlotUpdateWithoutUserInput>, Prisma.ActiveSlotUncheckedUpdateWithoutUserInput>;
};
export type ActiveSlotCreateWithoutUserInput = {
    id?: string;
    start_time: string;
    end_time: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ActiveSlotUncheckedCreateWithoutUserInput = {
    id?: string;
    start_time: string;
    end_time: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ActiveSlotCreateOrConnectWithoutUserInput = {
    where: Prisma.ActiveSlotWhereUniqueInput;
    create: Prisma.XOR<Prisma.ActiveSlotCreateWithoutUserInput, Prisma.ActiveSlotUncheckedCreateWithoutUserInput>;
};
export type ActiveSlotUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.ActiveSlotUpdateWithoutUserInput, Prisma.ActiveSlotUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ActiveSlotCreateWithoutUserInput, Prisma.ActiveSlotUncheckedCreateWithoutUserInput>;
    where?: Prisma.ActiveSlotWhereInput;
};
export type ActiveSlotUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.ActiveSlotWhereInput;
    data: Prisma.XOR<Prisma.ActiveSlotUpdateWithoutUserInput, Prisma.ActiveSlotUncheckedUpdateWithoutUserInput>;
};
export type ActiveSlotUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    start_time?: Prisma.StringFieldUpdateOperationsInput | string;
    end_time?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActiveSlotUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    start_time?: Prisma.StringFieldUpdateOperationsInput | string;
    end_time?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActiveSlotSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["activeSlot"]>;
export type ActiveSlotSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["activeSlot"]>;
export type ActiveSlotSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["activeSlot"]>;
export type ActiveSlotSelectScalar = {
    id?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    userId?: boolean;
};
export type ActiveSlotOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "start_time" | "end_time" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["activeSlot"]>;
export type ActiveSlotInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ActiveSlotIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ActiveSlotIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ActiveSlotPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ActiveSlot";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        start_time: string;
        end_time: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }, ExtArgs["result"]["activeSlot"]>;
    composites: {};
};
export type ActiveSlotGetPayload<S extends boolean | null | undefined | ActiveSlotDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ActiveSlotPayload, S>;
export type ActiveSlotCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ActiveSlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ActiveSlotCountAggregateInputType | true;
};
export interface ActiveSlotDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ActiveSlot'];
        meta: {
            name: 'ActiveSlot';
        };
    };
    /**
     * Find zero or one ActiveSlot that matches the filter.
     * @param {ActiveSlotFindUniqueArgs} args - Arguments to find a ActiveSlot
     * @example
     * // Get one ActiveSlot
     * const activeSlot = await prisma.activeSlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActiveSlotFindUniqueArgs>(args: Prisma.SelectSubset<T, ActiveSlotFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ActiveSlotClient<runtime.Types.Result.GetResult<Prisma.$ActiveSlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ActiveSlot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActiveSlotFindUniqueOrThrowArgs} args - Arguments to find a ActiveSlot
     * @example
     * // Get one ActiveSlot
     * const activeSlot = await prisma.activeSlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActiveSlotFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ActiveSlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ActiveSlotClient<runtime.Types.Result.GetResult<Prisma.$ActiveSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ActiveSlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSlotFindFirstArgs} args - Arguments to find a ActiveSlot
     * @example
     * // Get one ActiveSlot
     * const activeSlot = await prisma.activeSlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActiveSlotFindFirstArgs>(args?: Prisma.SelectSubset<T, ActiveSlotFindFirstArgs<ExtArgs>>): Prisma.Prisma__ActiveSlotClient<runtime.Types.Result.GetResult<Prisma.$ActiveSlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ActiveSlot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSlotFindFirstOrThrowArgs} args - Arguments to find a ActiveSlot
     * @example
     * // Get one ActiveSlot
     * const activeSlot = await prisma.activeSlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActiveSlotFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ActiveSlotFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ActiveSlotClient<runtime.Types.Result.GetResult<Prisma.$ActiveSlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ActiveSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActiveSlots
     * const activeSlots = await prisma.activeSlot.findMany()
     *
     * // Get first 10 ActiveSlots
     * const activeSlots = await prisma.activeSlot.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const activeSlotWithIdOnly = await prisma.activeSlot.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ActiveSlotFindManyArgs>(args?: Prisma.SelectSubset<T, ActiveSlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActiveSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ActiveSlot.
     * @param {ActiveSlotCreateArgs} args - Arguments to create a ActiveSlot.
     * @example
     * // Create one ActiveSlot
     * const ActiveSlot = await prisma.activeSlot.create({
     *   data: {
     *     // ... data to create a ActiveSlot
     *   }
     * })
     *
     */
    create<T extends ActiveSlotCreateArgs>(args: Prisma.SelectSubset<T, ActiveSlotCreateArgs<ExtArgs>>): Prisma.Prisma__ActiveSlotClient<runtime.Types.Result.GetResult<Prisma.$ActiveSlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ActiveSlots.
     * @param {ActiveSlotCreateManyArgs} args - Arguments to create many ActiveSlots.
     * @example
     * // Create many ActiveSlots
     * const activeSlot = await prisma.activeSlot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ActiveSlotCreateManyArgs>(args?: Prisma.SelectSubset<T, ActiveSlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ActiveSlots and returns the data saved in the database.
     * @param {ActiveSlotCreateManyAndReturnArgs} args - Arguments to create many ActiveSlots.
     * @example
     * // Create many ActiveSlots
     * const activeSlot = await prisma.activeSlot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ActiveSlots and only return the `id`
     * const activeSlotWithIdOnly = await prisma.activeSlot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ActiveSlotCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ActiveSlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActiveSlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ActiveSlot.
     * @param {ActiveSlotDeleteArgs} args - Arguments to delete one ActiveSlot.
     * @example
     * // Delete one ActiveSlot
     * const ActiveSlot = await prisma.activeSlot.delete({
     *   where: {
     *     // ... filter to delete one ActiveSlot
     *   }
     * })
     *
     */
    delete<T extends ActiveSlotDeleteArgs>(args: Prisma.SelectSubset<T, ActiveSlotDeleteArgs<ExtArgs>>): Prisma.Prisma__ActiveSlotClient<runtime.Types.Result.GetResult<Prisma.$ActiveSlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ActiveSlot.
     * @param {ActiveSlotUpdateArgs} args - Arguments to update one ActiveSlot.
     * @example
     * // Update one ActiveSlot
     * const activeSlot = await prisma.activeSlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ActiveSlotUpdateArgs>(args: Prisma.SelectSubset<T, ActiveSlotUpdateArgs<ExtArgs>>): Prisma.Prisma__ActiveSlotClient<runtime.Types.Result.GetResult<Prisma.$ActiveSlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ActiveSlots.
     * @param {ActiveSlotDeleteManyArgs} args - Arguments to filter ActiveSlots to delete.
     * @example
     * // Delete a few ActiveSlots
     * const { count } = await prisma.activeSlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ActiveSlotDeleteManyArgs>(args?: Prisma.SelectSubset<T, ActiveSlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ActiveSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActiveSlots
     * const activeSlot = await prisma.activeSlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ActiveSlotUpdateManyArgs>(args: Prisma.SelectSubset<T, ActiveSlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ActiveSlots and returns the data updated in the database.
     * @param {ActiveSlotUpdateManyAndReturnArgs} args - Arguments to update many ActiveSlots.
     * @example
     * // Update many ActiveSlots
     * const activeSlot = await prisma.activeSlot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ActiveSlots and only return the `id`
     * const activeSlotWithIdOnly = await prisma.activeSlot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ActiveSlotUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ActiveSlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActiveSlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ActiveSlot.
     * @param {ActiveSlotUpsertArgs} args - Arguments to update or create a ActiveSlot.
     * @example
     * // Update or create a ActiveSlot
     * const activeSlot = await prisma.activeSlot.upsert({
     *   create: {
     *     // ... data to create a ActiveSlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActiveSlot we want to update
     *   }
     * })
     */
    upsert<T extends ActiveSlotUpsertArgs>(args: Prisma.SelectSubset<T, ActiveSlotUpsertArgs<ExtArgs>>): Prisma.Prisma__ActiveSlotClient<runtime.Types.Result.GetResult<Prisma.$ActiveSlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ActiveSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSlotCountArgs} args - Arguments to filter ActiveSlots to count.
     * @example
     * // Count the number of ActiveSlots
     * const count = await prisma.activeSlot.count({
     *   where: {
     *     // ... the filter for the ActiveSlots we want to count
     *   }
     * })
    **/
    count<T extends ActiveSlotCountArgs>(args?: Prisma.Subset<T, ActiveSlotCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ActiveSlotCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ActiveSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActiveSlotAggregateArgs>(args: Prisma.Subset<T, ActiveSlotAggregateArgs>): Prisma.PrismaPromise<GetActiveSlotAggregateType<T>>;
    /**
     * Group by ActiveSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiveSlotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends ActiveSlotGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ActiveSlotGroupByArgs['orderBy'];
    } : {
        orderBy?: ActiveSlotGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ActiveSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActiveSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ActiveSlot model
     */
    readonly fields: ActiveSlotFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ActiveSlot.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ActiveSlotClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the ActiveSlot model
 */
export interface ActiveSlotFieldRefs {
    readonly id: Prisma.FieldRef<"ActiveSlot", 'String'>;
    readonly start_time: Prisma.FieldRef<"ActiveSlot", 'String'>;
    readonly end_time: Prisma.FieldRef<"ActiveSlot", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ActiveSlot", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ActiveSlot", 'DateTime'>;
    readonly userId: Prisma.FieldRef<"ActiveSlot", 'String'>;
}
/**
 * ActiveSlot findUnique
 */
export type ActiveSlotFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSlot
     */
    select?: Prisma.ActiveSlotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ActiveSlot
     */
    omit?: Prisma.ActiveSlotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ActiveSlotInclude<ExtArgs> | null;
    /**
     * Filter, which ActiveSlot to fetch.
     */
    where: Prisma.ActiveSlotWhereUniqueInput;
};
/**
 * ActiveSlot findUniqueOrThrow
 */
export type ActiveSlotFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSlot
     */
    select?: Prisma.ActiveSlotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ActiveSlot
     */
    omit?: Prisma.ActiveSlotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ActiveSlotInclude<ExtArgs> | null;
    /**
     * Filter, which ActiveSlot to fetch.
     */
    where: Prisma.ActiveSlotWhereUniqueInput;
};
/**
 * ActiveSlot findFirst
 */
export type ActiveSlotFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSlot
     */
    select?: Prisma.ActiveSlotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ActiveSlot
     */
    omit?: Prisma.ActiveSlotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ActiveSlotInclude<ExtArgs> | null;
    /**
     * Filter, which ActiveSlot to fetch.
     */
    where?: Prisma.ActiveSlotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ActiveSlots to fetch.
     */
    orderBy?: Prisma.ActiveSlotOrderByWithRelationInput | Prisma.ActiveSlotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ActiveSlots.
     */
    cursor?: Prisma.ActiveSlotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ActiveSlots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ActiveSlots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ActiveSlots.
     */
    distinct?: Prisma.ActiveSlotScalarFieldEnum | Prisma.ActiveSlotScalarFieldEnum[];
};
/**
 * ActiveSlot findFirstOrThrow
 */
export type ActiveSlotFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSlot
     */
    select?: Prisma.ActiveSlotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ActiveSlot
     */
    omit?: Prisma.ActiveSlotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ActiveSlotInclude<ExtArgs> | null;
    /**
     * Filter, which ActiveSlot to fetch.
     */
    where?: Prisma.ActiveSlotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ActiveSlots to fetch.
     */
    orderBy?: Prisma.ActiveSlotOrderByWithRelationInput | Prisma.ActiveSlotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ActiveSlots.
     */
    cursor?: Prisma.ActiveSlotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ActiveSlots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ActiveSlots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ActiveSlots.
     */
    distinct?: Prisma.ActiveSlotScalarFieldEnum | Prisma.ActiveSlotScalarFieldEnum[];
};
/**
 * ActiveSlot findMany
 */
export type ActiveSlotFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSlot
     */
    select?: Prisma.ActiveSlotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ActiveSlot
     */
    omit?: Prisma.ActiveSlotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ActiveSlotInclude<ExtArgs> | null;
    /**
     * Filter, which ActiveSlots to fetch.
     */
    where?: Prisma.ActiveSlotWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ActiveSlots to fetch.
     */
    orderBy?: Prisma.ActiveSlotOrderByWithRelationInput | Prisma.ActiveSlotOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ActiveSlots.
     */
    cursor?: Prisma.ActiveSlotWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ActiveSlots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ActiveSlots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ActiveSlots.
     */
    distinct?: Prisma.ActiveSlotScalarFieldEnum | Prisma.ActiveSlotScalarFieldEnum[];
};
/**
 * ActiveSlot create
 */
export type ActiveSlotCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSlot
     */
    select?: Prisma.ActiveSlotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ActiveSlot
     */
    omit?: Prisma.ActiveSlotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ActiveSlotInclude<ExtArgs> | null;
    /**
     * The data needed to create a ActiveSlot.
     */
    data: Prisma.XOR<Prisma.ActiveSlotCreateInput, Prisma.ActiveSlotUncheckedCreateInput>;
};
/**
 * ActiveSlot createMany
 */
export type ActiveSlotCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActiveSlots.
     */
    data: Prisma.ActiveSlotCreateManyInput | Prisma.ActiveSlotCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ActiveSlot createManyAndReturn
 */
export type ActiveSlotCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSlot
     */
    select?: Prisma.ActiveSlotSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ActiveSlot
     */
    omit?: Prisma.ActiveSlotOmit<ExtArgs> | null;
    /**
     * The data used to create many ActiveSlots.
     */
    data: Prisma.ActiveSlotCreateManyInput | Prisma.ActiveSlotCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ActiveSlotIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ActiveSlot update
 */
export type ActiveSlotUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSlot
     */
    select?: Prisma.ActiveSlotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ActiveSlot
     */
    omit?: Prisma.ActiveSlotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ActiveSlotInclude<ExtArgs> | null;
    /**
     * The data needed to update a ActiveSlot.
     */
    data: Prisma.XOR<Prisma.ActiveSlotUpdateInput, Prisma.ActiveSlotUncheckedUpdateInput>;
    /**
     * Choose, which ActiveSlot to update.
     */
    where: Prisma.ActiveSlotWhereUniqueInput;
};
/**
 * ActiveSlot updateMany
 */
export type ActiveSlotUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ActiveSlots.
     */
    data: Prisma.XOR<Prisma.ActiveSlotUpdateManyMutationInput, Prisma.ActiveSlotUncheckedUpdateManyInput>;
    /**
     * Filter which ActiveSlots to update
     */
    where?: Prisma.ActiveSlotWhereInput;
    /**
     * Limit how many ActiveSlots to update.
     */
    limit?: number;
};
/**
 * ActiveSlot updateManyAndReturn
 */
export type ActiveSlotUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSlot
     */
    select?: Prisma.ActiveSlotSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ActiveSlot
     */
    omit?: Prisma.ActiveSlotOmit<ExtArgs> | null;
    /**
     * The data used to update ActiveSlots.
     */
    data: Prisma.XOR<Prisma.ActiveSlotUpdateManyMutationInput, Prisma.ActiveSlotUncheckedUpdateManyInput>;
    /**
     * Filter which ActiveSlots to update
     */
    where?: Prisma.ActiveSlotWhereInput;
    /**
     * Limit how many ActiveSlots to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ActiveSlotIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ActiveSlot upsert
 */
export type ActiveSlotUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSlot
     */
    select?: Prisma.ActiveSlotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ActiveSlot
     */
    omit?: Prisma.ActiveSlotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ActiveSlotInclude<ExtArgs> | null;
    /**
     * The filter to search for the ActiveSlot to update in case it exists.
     */
    where: Prisma.ActiveSlotWhereUniqueInput;
    /**
     * In case the ActiveSlot found by the `where` argument doesn't exist, create a new ActiveSlot with this data.
     */
    create: Prisma.XOR<Prisma.ActiveSlotCreateInput, Prisma.ActiveSlotUncheckedCreateInput>;
    /**
     * In case the ActiveSlot was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ActiveSlotUpdateInput, Prisma.ActiveSlotUncheckedUpdateInput>;
};
/**
 * ActiveSlot delete
 */
export type ActiveSlotDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSlot
     */
    select?: Prisma.ActiveSlotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ActiveSlot
     */
    omit?: Prisma.ActiveSlotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ActiveSlotInclude<ExtArgs> | null;
    /**
     * Filter which ActiveSlot to delete.
     */
    where: Prisma.ActiveSlotWhereUniqueInput;
};
/**
 * ActiveSlot deleteMany
 */
export type ActiveSlotDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ActiveSlots to delete
     */
    where?: Prisma.ActiveSlotWhereInput;
    /**
     * Limit how many ActiveSlots to delete.
     */
    limit?: number;
};
/**
 * ActiveSlot without action
 */
export type ActiveSlotDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActiveSlot
     */
    select?: Prisma.ActiveSlotSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ActiveSlot
     */
    omit?: Prisma.ActiveSlotOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ActiveSlotInclude<ExtArgs> | null;
};
//# sourceMappingURL=ActiveSlot.d.ts.map