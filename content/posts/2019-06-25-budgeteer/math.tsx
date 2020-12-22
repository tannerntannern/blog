import React from 'react';
import Math from '../../../src/components/math';

// NOTE: mixing these in MDX was causing headaches. It's easier to just define everything in here.

export const I = () => (<Math>$i$</Math>);
export const J = () => (<Math>$j$</Math>);
export const S = () => (<Math>$s$</Math>);
export const X = () => (<Math>$x$</Math>);
export const C = () => (<Math>$c$</Math>);
export const P = () => (<Math>$p$</Math>);
export const Balance_i = () => (<Math>$B_i$</Math>);
export const Transfer_ij = () => (<Math>$T^i_j$</Math>);
export const Transfer_ps = () => (<Math>$T^p_s$</Math>);
export const Consumers_i = () => (<Math>$C_i$</Math>);
export const Suppliers_i = () => (<Math>$S_i$</Math>);

// Can use this as an alternative for short expressions
export const M = (props: { s: string }) => (<Math>{`$${props.s}$`}</Math>);

// https://www.jmilne.org/not/Mamscd.pdf
export const TransferVisual1 = () => (<Math>{String.raw`$$
\require{AMScd}
\begin{CD}
    a @>{T^a_b}>> b\\
    @V{T^a_c}VV @VV{T^b_d}V\\
    c @>>{T^c_d}> d
\end{CD}
$$`}</Math>);

export const TransferVisual2 = () => (<Math>{String.raw`
$$
S_a = \emptyset, C_a = \{b, c\}\\
S_b = \{a\}, C_b = \{d\}\\
S_c = \{a\}, C_c = \{d\}\\
S_d = \{b, c\}, C_d = \emptyset
$$
`}</Math>);

export const SupplierConstraints = () => (<Math>{String.raw`$$B_s \geq 0, B_s = x - \sum_{i \in C_s} T^s_i$$`}</Math>);
export const ConsumerConstraints = () => (<Math>{String.raw`$$B_c = \sum_{i \in S_c} T^i_c$$`}</Math>);
export const PipeConstraints = () => (<Math>{String.raw`$$B_p = 0, B_p = (\sum_{i \in S_p} T^i_p) - (\sum_{i \in C_p} T^p_i)$$`}</Math>);

export const FixedTransferConstraints = () => (<Math>{String.raw`$$s \in S_c, c \in C_s, T^s_c = x, T^s_c = -T^c_s$$`}</Math>);
export const VariableTransferConstraints = () => (<Math>{String.raw`$$s \in S_p, p \in C_s, T^s_p \geq 0, T^s_p = -T^p_s$$`}</Math>);

export const SupplyAsMuchAsPossibleWeakConstraint = () => (<Math>{String.raw`$$T^p_s = \infty$$`}</Math>);
export const SupplyAsMuchAsNecessaryWeakConstraint = () => (<Math>$$T^p_s = 0$$</Math>);
